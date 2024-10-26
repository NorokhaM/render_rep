package com.hackaton.test.spring_demo.Controller;


import com.hackaton.test.spring_demo.Service.CsvService;
import com.hackaton.test.spring_demo.model.Product;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("api/v1/products")
public class CsvController {
    final CsvService csvService;

    public CsvController(CsvService csvService) {
        this.csvService = csvService;
    }


    @PostMapping("/add")
    public String addProduct(@RequestBody Product product) {
        csvService.save(product);
        return "Product added successfully";
    }

    @GetMapping("/get")
    public List<Product> getProducts() {
        return csvService.readAll();
    }
}
