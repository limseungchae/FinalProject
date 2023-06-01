package com.example.finalproject.controller;

import com.example.finalproject.model.ClassMeta;
import com.example.finalproject.service.FrontService;
import com.example.finalproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
public class FrontController {
    @Autowired
    FrontService frtsrv;

    @Autowired
    UserService userservice;

    @Autowired
    private HttpSession httpSession;

    @GetMapping("/api/hello")
    public String test() {
        return "Hello, world!";
    }

    @GetMapping("/api/main")
    public List<Object[]> main(String category, String sido) {
        return frtsrv.readMain(category, sido);
    }

    @GetMapping("/api/search")
    public List<Object[]> search(String search, HttpSession sess) {
        System.out.println( userservice.kId + "여기서는?");
        System.out.println( httpSession.getId() + "서치?");
        return frtsrv.readSearch(search);
    }

    @GetMapping("/api/likey")
    public List<Object[]> searchLikey(HttpSession sess) {
        System.out.println( userservice.kId + "여기서는?");
        System.out.println( httpSession.getId() + "like?");

        return frtsrv.readLikey();
    }



    //---------------- 클래스 상세보기 - 김득열
    // 클래스 정보
    @GetMapping("/viewclass")
    public ClassMeta viewclass(int link){
        return frtsrv.readOne(link);
    }

    // 완성작 이미지
    @GetMapping("/viewclass/completeimg")
    public List<String> completeimg(int link){
        return frtsrv.readImg(link);
    }

    // 찜하기
    @GetMapping("/viewclass/addfavorite")
    public void addFavorite(HttpSession session, int link){
    }


}
