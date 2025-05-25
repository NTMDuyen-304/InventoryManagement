package com.example.InventoryManagement.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {
    private Long id;
    private String name;
    private String category;
    private Integer quantity;
     private Integer total; 
    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }
    // // Getters and setters
    // public Long getId() { return id; }
    // public void setId(Long id) { this.id = id; }
    // public String getName() { return name; }
    // public void setName(String name) { this.name = name; }
    // public String getCategory() { return category; }
    // public void setCategory(String category) { this.category = category; }
    // public Integer getQuantity() { return quantity; }
    // public void setQuantity(Integer quantity) { this.quantity = quantity; }
}
