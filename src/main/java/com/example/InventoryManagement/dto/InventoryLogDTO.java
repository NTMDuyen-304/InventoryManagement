package com.example.InventoryManagement.dto;
import lombok.*;

//import java.time.LocalDateTime;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class InventoryLogDTO {
    private Long id;
    private Long productId;
    private String productName; // chỉ để hiển thị cho tiện
    private String action; // IMPORT hoặc EXPORT
    private Integer amount;
    private Date createdAt;
    //     // Getters and setters
    // public Long getId() { return id; }
    // public void setId(Long id) { this.id = id; }
    // public Long getProductId() { return productId; }
    // public void setProductId(Long productId) { this.productId = productId; }
    // public String getAction() { return action; }
    // public void setAction(String action) { this.action = action; }
    // public Integer getAmount() { return amount; }
    // public void setAmount(Integer amount) { this.amount = amount; }
    // public LocalDateTime getCreatedAt() { return createdAt; }
    // public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}