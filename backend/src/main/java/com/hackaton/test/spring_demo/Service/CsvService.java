package com.hackaton.test.spring_demo.Service;


import com.hackaton.test.spring_demo.model.Product;
import com.opencsv.CSVReader;
import com.opencsv.CSVWriter;
import com.opencsv.exceptions.CsvConstraintViolationException;
import com.opencsv.exceptions.CsvValidationException;
import org.springframework.stereotype.Service;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class CsvService {

    private static final String CSV="products.csv";

    public List<Product> readAll() {
        List<Product> products = new ArrayList<>();
        try (CSVReader reader = new CSVReader(new FileReader(CSV))) {
            String[] line;
            while ((line = reader.readNext()) != null) {
                Product product = new Product(line[0], line[1], Double.parseDouble(line[2]));
                products.add(product);
            }
        } catch (IOException | CsvValidationException e) {
            e.printStackTrace();
        }
        return products;
    }

    public void save(Product product) {
        try (CSVWriter writer = new CSVWriter(new FileWriter(CSV, true))) {
            String[] record = {product.getId(), product.getName(), String.valueOf(product.getPrice())};
            writer.writeNext(record);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }



}
