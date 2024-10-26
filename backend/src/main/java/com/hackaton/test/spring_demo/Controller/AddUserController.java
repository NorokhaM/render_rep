package com.hackaton.test.spring_demo.Controller;

import com.hackaton.test.spring_demo.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/users")
public class AddUserController {

    @PostMapping("/add")
    public ResponseEntity<String> addUser(@RequestBody User user) {
        System.out.println(user.getName());
        System.out.println(user.getAge());
        return ResponseEntity.ok("User added successfully");
    }

    @GetMapping("/get")
    public ResponseEntity<User> getUser() {
        User user = new User("John", 25, "aboba");
        return ResponseEntity.ok(user);

    }
}
