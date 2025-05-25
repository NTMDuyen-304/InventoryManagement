package com.example.InventoryManagement.service;

import com.example.InventoryManagement.dto.InventoryLogDTO;
import com.example.InventoryManagement.entity.InventoryLog;
import com.example.InventoryManagement.entity.Product;
import com.example.InventoryManagement.mapper.InventoryLogMapper;
import com.example.InventoryManagement.repository.InventoryLogRepository;
import com.example.InventoryManagement.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class InventoryService {

    @Autowired
    private InventoryLogRepository logRepository;

    @Autowired
    private ProductRepository productRepository;

    public List<InventoryLogDTO> getAllLogs() {
        return logRepository.findAll()
                .stream()
                .map(InventoryLogMapper::toDTO)
                .collect(Collectors.toList());
    }

    public InventoryLogDTO importProduct(Long productId, int amount) {
        return updateStock(productId, amount, "IMPORT");
    }

    public InventoryLogDTO exportProduct(Long productId, int amount) {
        return updateStock(productId, amount, "EXPORT");
    }

    private InventoryLogDTO updateStock(Long productId, int amount, String action) {
        Product product = productRepository.findById(productId).orElse(null);
        if (product == null) return null;

        if (action.equals("IMPORT")) {
            product.setQuantity(product.getQuantity() + amount);
        } else if (action.equals("EXPORT")) {
            product.setQuantity(product.getQuantity() - amount);
        }

        productRepository.save(product);

        InventoryLog log = new InventoryLog();
        log.setProduct(product);
        log.setAction(action);
        log.setAmount(amount);
        log.setCreatedAt(new java.util.Date());

        return InventoryLogMapper.toDTO(logRepository.save(log));
    }
    public InventoryLogDTO createLog(InventoryLogDTO dto) {
    if (dto.getProductId() == null || dto.getAction() == null || dto.getAmount() == null || dto.getAmount() <= 0) {
        throw new IllegalArgumentException("Invalid inventory log data");
    }

    String action = dto.getAction().toUpperCase();
    Long productId = dto.getProductId();
    int amount = dto.getAmount();

    if (action.equals("IMPORT")) {
        return importProduct(productId, amount);
    } else if (action.equals("EXPORT")) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        if (product.getQuantity() < amount) {
            throw new RuntimeException("Not enough stock to export");
        }

        return exportProduct(productId, amount);
    } else {
        throw new IllegalArgumentException("Invalid action type. Only IMPORT or EXPORT are allowed.");
    }
}}

