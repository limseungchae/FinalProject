package com.example.finalproject.controller;

import com.example.finalproject.model.ClassMeta;
import com.example.finalproject.model.User;
import com.example.finalproject.service.FrontService;
import com.example.finalproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
public class FrontController {
    public String kId = "2813856259";

    @Autowired
    FrontService frtsrv;

    @Autowired
    UserService ussrv;

    @GetMapping("/test/user")
    public ResponseEntity<?> readUserInfo(@AuthenticationPrincipal String mbno){
        User user = ussrv.readUser(mbno);
        System.out.println(user);

        return ResponseEntity.ok().body(user);
    }

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

    // modify페이지 2): update
    /*@PostMapping("/api/modify")
    public String modify(@RequestBody ModifyRequest request) {
        frtsrv.updateUser(request);

        return "";
    }*/



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
