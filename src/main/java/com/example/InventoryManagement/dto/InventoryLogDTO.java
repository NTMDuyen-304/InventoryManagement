package com.example.InventoryManagement.dto;
import lombok.*;

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
}