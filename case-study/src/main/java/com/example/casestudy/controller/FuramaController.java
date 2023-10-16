package com.example.casestudy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("")
public class FuramaController {
    @GetMapping
    public String showIndex(){
        return "/view";
    }
    @GetMapping("/admins")
    public String ShowTypes(Model model){
        return "/facilities";
    }
}
