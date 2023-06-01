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
    public String kId = "2813096715";

    @Autowired
    FrontService frtsrv;

    @Autowired
    UserService userservice;

    @GetMapping("/api/hello")
    public String test() {
        return "Hello, world!";
    }

    // 메인 페이지
    @GetMapping("/api/main")
    public List<Object[]> main(String category, String sido) {
        return frtsrv.readMain(category, sido);
    }

    // search 페이지
    @GetMapping("/api/search")
    public List<Object[]> search(String search) {
        System.out.println( userservice.kId + "여기서는?");

        return frtsrv.readSearch(search);
    }

    // like 페이지
    @GetMapping("/api/likey")
    public List<Object[]> searchLikey() {

        return frtsrv.readLikey(kId);
    }

    // modify페이지 1): read
    @GetMapping("/api/readModify")
    public List<Object[]> readModify() {

        return frtsrv.readModify(kId);
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
