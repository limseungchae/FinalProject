package com.example.finalproject.service;

import com.example.finalproject.dto.ReservationDTO;
import com.example.finalproject.model.*;

import java.util.List;

public interface FrontService {
    List<Object[]> readMain(String category, String sido);

    // 서치페이지
    List<Object[]> readSearch(String search);
    // 라이크페이지
    List<Object[]> readLikey(String kId);
    // unlike
    void removeLikey(String kId, int link);
    void modify(ModifyBody request);

    List<Pay> readPayList(String kId);

    String readPayImg(int rno);

    Pay readPayInfo(int rno);

    Member readMember(int mbno);

    // 득열이 추가분
    ClassMeta readOne(int link);

    List<String> readImg(int link);

    List<Object[]> readModify(String kId);

    boolean newFavorite(Long kakaoid, int link);

    boolean newReservation(ReservationDTO rDTO, String mbno);

//    void newPay(String kakaoid, String tid, String paydate, String cname);
}
