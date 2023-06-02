package com.example.finalproject.controller;

import com.example.finalproject.dto.UserDTO;
import com.example.finalproject.model.User;
import com.example.finalproject.security.TokenProvider;
import com.example.finalproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class UserController {
    @Autowired
    private UserService ussrv;

    @Autowired
    private TokenProvider tokenProvider;

    // 프론트에서 토큰 받아오는 url
    @GetMapping("/token")
    public ResponseEntity<?> signupOrsignin(String token) {
        // 이미 회원가입했던 유저든
        // 첫 로그인이라 회원가입된 유저든간에
        // 로그인 성공 처리를 한다.
        // 그래서 두 경우 모두 토큰을 발행해주기 위해
        // 조회, 추가 했던 User 데이터 정보를 받아온다
        User user = ussrv.joinOrAuthenticate(token);

        // 토큰 생성
        String jwtToken = tokenProvider.create(user);
        UserDTO responseUserDTO = UserDTO.builder()
                .kakaoid(user.getKakaoid())
                .mbno(user.getMbno())
                .token(jwtToken)
                .build();
        return ResponseEntity.ok().body(responseUserDTO);
    }
}