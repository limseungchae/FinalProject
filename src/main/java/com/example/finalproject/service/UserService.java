package com.example.finalproject.service;

import com.example.finalproject.dao.UserDao;
import com.example.finalproject.model.User;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class UserService {
    private final Oauth2Kakao oauth2Kakao;

    @Autowired
    private UserDao urdao;

    public void oauth2AuthorizationKakao(String token) {
        String userInfoFromKakao = oauth2Kakao.callGetUserByAccessToken(token);
        System.out.println("userInfoFromKakao 유저카카오 정보는 입니다 ! " + userInfoFromKakao);

        ObjectMapper objectMapper = new ObjectMapper();

        try {
            // JSON 파싱하여 JsonNode로 변환
            JsonNode jsonNode = objectMapper.readTree(userInfoFromKakao);

            // id 값 가져오기
            Long id = jsonNode.get("id").asLong();
            String nickname = String.valueOf(jsonNode.get("properties").get("nickname"));
            String email = String.valueOf(jsonNode.get("kakao_account").get("email"));
            System.out.println("이름은? " + nickname);
            System.out.println("아이디값은 " + id);
            System.out.println("이메일값은 " + email);

            int res = urdao.insertUser(new User(null, id, nickname, email, null));
            System.out.println("저장성공 1, 실패 0 ! " + res);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
