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

    public ProductDTO createProduct(ProductDTO dto) {
        // Đảm bảo ID là null để tránh cập nhật nhầm khi insert
        dto.setId(null);
        Product created = productRepository.save(ProductMapper.toEntity(dto));
        return ProductMapper.toDTO(created);
    }

    public ProductDTO updateProduct(Long id, ProductDTO dto) {
        return productRepository.findById(id)
                .map(existing -> {
                    // Cập nhật các trường cần thiết từ DTO
                    existing.setName(dto.getName());
                    existing.setCategory(dto.getCategory());
                    existing.setQuantity(dto.getQuantity());
                    Product updated = productRepository.save(existing);
                    return ProductMapper.toDTO(updated);
                })
                .orElse(null);
    }
}
