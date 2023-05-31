package com.example.finalproject.controller;

import com.example.finalproject.model.ClassMeta;
import com.example.finalproject.service.FrontService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FrontController {
    @Autowired
    FrontService frtsrv;

    @GetMapping("/api/hello")
    public String test() {
        return "Hello, world!";
    }

    @GetMapping("/api/main")
    public List<Object[]> main(String category, String sido) {
        return frtsrv.readMain(category, sido);
    }

    @GetMapping("/api/search")
    public List<Object[]> search(String search) {

        return frtsrv.readSearch(search);
    }

    @GetMapping("/api/likey")
    public List<Object[]> searchLikey() {
        return frtsrv.readLikey();
    }
}
