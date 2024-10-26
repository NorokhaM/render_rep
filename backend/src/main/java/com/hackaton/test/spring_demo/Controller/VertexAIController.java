package com.hackaton.test.spring_demo.Controller;

import com.hackaton.test.spring_demo.Service.VertexAIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/vertexai")
public class VertexAIController {

    @Autowired
    private VertexAIService vertexAIService;

    @PostMapping("/multiturn")
    public String getMultiTurnResponse(@RequestBody String message) {
        try {
            return vertexAIService.getMultiTurnResponse(message);
        } catch (IOException e) {
            e.printStackTrace();
            return "Error occurred while processing the request.";
        }
    }
}

