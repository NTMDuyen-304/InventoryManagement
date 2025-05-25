package com.example.InventoryManagement.controller.page;
import com.example.InventoryManagement.dto.InventoryLogDTO;
import com.example.InventoryManagement.service.InventoryService;
import com.example.InventoryManagement.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
public class InventoryLogPageController {
    private final InventoryService logService;
    private final ProductService productService;

    @GetMapping("/logs")
    public String listLogs(Model model) {
        model.addAttribute("logs", logService.getAllLogs());
        return "log/list";
    }

    @GetMapping("/logs/create")
    public String showLogForm(Model model) {
        model.addAttribute("log", new InventoryLogDTO());
        model.addAttribute("products", productService.getAllProducts());
        return "log/form";
    }

    @PostMapping("/logs")
    public String createLog(@ModelAttribute InventoryLogDTO dto) {
        logService.createLog(dto);
        return "redirect:/logs";
    }
}
