package com.example.finalproject.controller;

import com.example.finalproject.dto.ReservationDTO;
import com.example.finalproject.model.*;
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
        Member member = frtsrv.readMember(Integer.parseInt(mbno));
        System.out.println(member);
        return ResponseEntity.ok().body(member);
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

    // /like의 delete 요청
    @PostMapping("/api/unlikey")
    public void deleteLikey(@RequestParam int link, @RequestParam String kId) {
        frtsrv.removeLikey(kId,link);
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

    // /paylist 의 get 요청
    @GetMapping("/api/paylist")
    public List<Pay> payList(@AuthenticationPrincipal String mbno) {
        return frtsrv.readPayList(mbno);
    }

    // /payclass의 get 요청
    // 필요정보: class사진(CLASSIMG), 결제정보(클래스 이름, 강사이름, 클래스 날짜, 인원, 가격)(PAY), 주문자 정보(닉네임, email)(MEMBER)
    // 1. CLASSIMG: rno => cname => link 찾기 => link를 키로 thumbnail가져오기
    // 2. PAY: rno
    // 3. MEMBER: mbno
    @GetMapping("/api/payclass")
    public ResponseEntity<?> payClass(@RequestParam int rno, @RequestParam int mbno) {
        // 1. CLASSIMG 찾기
        String img = frtsrv.readPayImg(rno);
        System.out.println(img);
        // 2. PAY 찾기
        Pay info = frtsrv.readPayInfo(rno);
        // 3. MEMBER 찾기
        Member member = frtsrv.readMember(mbno);

        PayClassBody response = new PayClassBody(img, info, member);

        return ResponseEntity.ok().body(response);
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

//    // 결제 후 db의 pay 테이블 업데이트 - tid, paydate에 값 저장
    @PostMapping("/myinfo/payprocess")
    public void pay (@RequestParam String tid,
                     @RequestParam String paydate,
                     @RequestParam String kakaoid,
                     @RequestParam String cname) {
        frtsrv.newPay(kakaoid, tid, paydate, cname);
    }

}
