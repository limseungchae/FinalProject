package com.example.finalproject.controller;

import com.example.finalproject.dto.ReservationDTO;
import com.example.finalproject.model.ClassMeta;
import com.example.finalproject.model.ModifyBody;
import com.example.finalproject.model.User;
import com.example.finalproject.service.FrontService;
import com.example.finalproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FrontController {
    @Autowired
    private FrontService frtsrv;
    @Autowired
    private UserService ussrv;

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
    public List<Object[]> searchLikey(@RequestParam String kId) {

        return frtsrv.readLikey(kId);
    }

    // modify페이지 1): read
    @GetMapping("/api/readModify")
    public List<Object[]> readModify(@RequestParam String kId) {

        return frtsrv.readModify(kId);
    }

    // modify페이지 2): update
    @PostMapping("/api/modify")
    public String modify(@RequestBody ModifyBody request) {
        frtsrv.modify(request);

        return "";
    }


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
    public ResponseEntity<?> addFavorite(int link, @AuthenticationPrincipal String mbno){
        // 토큰의 payload 에서 mbno를 추출하고 그것으로 유저의 kakaoid 값을 조회
        User user =  ussrv.readUser(mbno);
        return ResponseEntity.ok().body(frtsrv.newFavorite(user.getKakaoid(), link));
    }

    // 에약하기
    @PostMapping("/viewclass/reservation")
    public ResponseEntity<?> reservation(@RequestBody ReservationDTO rDTO, @AuthenticationPrincipal String mbno){
        return ResponseEntity.ok().body(frtsrv.newReservation(rDTO, mbno));
    }
}
