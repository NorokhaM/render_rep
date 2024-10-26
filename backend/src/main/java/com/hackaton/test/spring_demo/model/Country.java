package com.hackaton.test.spring_demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@AllArgsConstructor
@Setter
@Getter
public class Country {
    private String name;
    private String capital;
    private int population;
}