package com.example.InventoryManagement.dto;


import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LoginRequestDTO {
    private String username;
    private String password;
    // // Getters and setters
    // public String getUsername() { return username; }
    // public void setUsername(String username) { this.username = username; }
    // public String getPassword() { return password; }
    // public void setPassword(String password) { this.password = password; }
}
