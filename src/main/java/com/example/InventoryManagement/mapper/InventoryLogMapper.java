package com.example.InventoryManagement.mapper;

import com.example.InventoryManagement.dto.InventoryLogDTO;
import com.example.InventoryManagement.entity.InventoryLog;

public class InventoryLogMapper {

    public static InventoryLogDTO toDTO(InventoryLog log) {
        if (log == null) return null;

        return new InventoryLogDTO(
                log.getId(),
                log.getProduct() != null ? log.getProduct().getId() : null,
                log.getProduct() != null ? log.getProduct().getName() : null,
                log.getAction(),
                log.getAmount(),
                log.getCreatedAt()
        );
    }
}
