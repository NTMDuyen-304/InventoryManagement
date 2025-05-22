package com.example.InventoryManagement.service;

import com.example.InventoryManagement.dto.LoginRequestDTO;
import com.example.InventoryManagement.dto.RegisterRequestDTO;
import com.example.InventoryManagement.repository.AccountRepository;
import com.example.InventoryManagement.dto.AccountDTO;
import com.example.InventoryManagement.mapper.AccountMapper;
import com.example.InventoryManagement.entity.Account;

import org.springframework.stereotype.Service;
import lombok.*;

@Service
@RequiredArgsConstructor
public class AccountService{

    private final AccountRepository accountRepository;

    public AccountDTO register(RegisterRequestDTO request) {
        Account account = Account.builder()
                .username(request.getUsername())
                .password(request.getPassword())  // nên mã hóa sau này
                .displayName(request.getDisplayName())
                .title(request.getTitle())
                .build();
        return AccountMapper.toDTO(accountRepository.save(account));
    }

    public AccountDTO login(LoginRequestDTO request) {
        Account account = accountRepository
                .findByUsernameAndPassword(request.getUsername(), request.getPassword())
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));
        return AccountMapper.toDTO(account);
    }

    public AccountDTO getByUsername(String username) {
        Account account = accountRepository
                .findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Account not found"));
        return AccountMapper.toDTO(account);
    }

    public Account getEntityByUsername(String username){
        return accountRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Account not found"));
    }
}
