package com.backend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/")
public class UserController {

    @GetMapping("/all")
    public String allAccess() {
        return "Public Content.";
    }

    @GetMapping("/student")
    public String userAccess() {
        return "STUDENT Content.";
    }

    @GetMapping("/teacher")
    public String moderatorAccess() {
        return "TEACHER Board.";
    }

    @GetMapping("/admin")
    public String adminAccess() {
        return "Admin Board.";
    }
}
