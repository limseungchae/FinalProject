package com.example.finalproject.controller;

import com.example.finalproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import javax.servlet.http.HttpSession;

@Controller
@SessionAttributes("sess")
public class KakaoLoginController {
    @Autowired
    UserService userService;

    // 프론트에서 토큰 받아오는 url
    @GetMapping("/oauth/token")
    public String getLogin(String token, HttpSession sess) {
        userService.oauth2AuthorizationKakao(token, sess);
        return "";
    }
}