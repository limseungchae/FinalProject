package com.example.finalproject.service;

import com.example.finalproject.dao.UserDAO;
import com.example.finalproject.model.User;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("ussrv")
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    private final Oauth2Kakao oauth2Kakao;

    @Autowired
    private UserDAO usdao;

    @Override
    public User joinOrAuthenticate(String token) {
        String userInfo = oauth2Kakao.requestUserInfoToKakao(token); // 카카오 서버에 유저 정보 요청

        System.out.println("카카오토큰을 이용해 카카오서버에게 받아온 유저정보 ... => " + userInfo);

        ObjectMapper objectMapper = new ObjectMapper();

        JsonNode jsonNode = null;
        try {
            // 받아온 유저정보를 JSON 파싱하여 JsonNode로 변환
            jsonNode = objectMapper.readTree(userInfo);
        } catch (Exception e) {
            e.printStackTrace();
        }
        // User 객체 만들기 위한 값을 jsonNode에서 추출
        String kakaoid = String.valueOf(jsonNode.get("id"));
        String nickname = String.valueOf(jsonNode.get("properties").get("nickname"));
        String email = String.valueOf(jsonNode.get("kakao_account").get("email"));
        System.out.println("서버로부터 받아온 카카오 유저 정보입니다 \n" +
                "kakaoid = " + kakaoid + "\nemail = " + email + "\nnickname = " + nickname);

        // 서버로부터 받은 카카오 ID가 테이블에 존재하는지 확인하고
        // 없을 경우에만 테이블에 유저 정보를 저장 - 중복저장 방지
        if(usdao.selectUser(kakaoid) == null) {
            return usdao.insertUser(new User(null, kakaoid, nickname, email, null));
        }else{
            return usdao.selectUser(kakaoid);
        }
    }

    @Override
    public User readUser(String mbno) {
        return usdao.selectAuthenticatedUser(mbno);
    }
}