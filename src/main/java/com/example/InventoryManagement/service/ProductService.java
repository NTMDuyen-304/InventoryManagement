package com.example.InventoryManagement.service;

import com.example.InventoryManagement.dto.ProductDTO;
import com.example.InventoryManagement.entity.Product;
import com.example.InventoryManagement.mapper.ProductMapper;
import com.example.InventoryManagement.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<ProductDTO> getAllProducts() {
        return productRepository.findAll()
                .stream()
                .map(ProductMapper::toDTO)
                .collect(Collectors.toList());
    }

    public ProductDTO getProductById(Long id) {
        return productRepository.findById(id)
                .map(ProductMapper::toDTO)
                .orElse(null);
    }

    public ProductDTO saveProduct(ProductDTO dto) {
        Product saved = productRepository.save(ProductMapper.toEntity(dto));
        return ProductMapper.toDTO(saved);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
