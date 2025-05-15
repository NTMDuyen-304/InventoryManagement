package com.example.InventoryManagement.mapper;

import com.example.InventoryManagement.dto.ProductDTO;
import com.example.InventoryManagement.entity.Product;

public class ProductMapper {

    public static ProductDTO toDTO(Product product) {
        if (product == null) return null;

        return new ProductDTO(
                product.getId(),
                product.getName(),
                product.getCategory(),
                product.getQuantity()
        );
    }

    public static Product toEntity(ProductDTO dto) {
        if (dto == null) return null;

        return new Product(
                dto.getId(),
                dto.getName(),
                dto.getCategory(),
                dto.getQuantity()
        );
    }
}