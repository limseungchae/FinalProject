package com.example.finalproject.controller;

import com.example.finalproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
public class KakaoLoginController {
    @Autowired
    UserService userService;

    // 프론트에서 토큰 받아오는 url
    @GetMapping("/oauth/token")
    public void getLogin(String token, HttpSession session) {
        userService.oauth2AuthorizationKakao(token, session);
    }
}