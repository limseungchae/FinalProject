package com.example.finalproject.service;

import com.example.finalproject.dao.UserDao;
import com.example.finalproject.model.User;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;


@Service
@RequiredArgsConstructor
public class UserService {
    private final Oauth2Kakao oauth2Kakao;

    @Autowired
    private UserDao urdao;

    public void oauth2AuthorizationKakao(String token, HttpSession session) {
        String userInfoFromKakao = oauth2Kakao.callGetUserByAccessToken(token); // 카카오 서버에 유저 정보 요청

        System.out.println("userInfoFromKakao - 서버로부터 응답받은 카카오유저 정보는 " + userInfoFromKakao + "  입니다 ! ");

        ObjectMapper objectMapper = new ObjectMapper();

        try {
            // JSON 파싱하여 JsonNode로 변환
            JsonNode jsonNode = objectMapper.readTree(userInfoFromKakao);

            // User 객체 만들기 위한 값을 jsonNode에서 추출
            Long id = jsonNode.get("id").asLong();
            String nickname = String.valueOf(jsonNode.get("properties").get("nickname"));
            String email = String.valueOf(jsonNode.get("kakao_account").get("email"));
            System.out.println(id + " " + email + " " + nickname);
            int res = 0;

            // 서버로부터 받은 카카오 ID가 테이블에 존재하는지 확인하고
            // 없을 경우에만 테이블에 유저 정보를 저장 - 중복저장 방지
            if(urdao.selectUser(id) == null) {
                res = urdao.insertUser(new User(null, id, nickname, email, null));
                System.out.println("DB에 유저정보 저장성공시 1, 실패시(이미 가입했을 경우) 0 ..... 결과는 => " + res);
            }

            // 세션 생성
            session.setAttribute("kId", id);
            session.setAttribute("kName", nickname);
            session.setAttribute("kEmail", email);


        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
