package com.example.finalproject.service;

import com.example.finalproject.dto.ReservationDTO;
import com.example.finalproject.model.ClassMeta;
import com.example.finalproject.model.Member;
import com.example.finalproject.model.ModifyBody;
import com.example.finalproject.model.Pay;

import java.util.List;

public interface FrontService {
    List<Object[]> readMain(String category, String sido);

    // 서치페이지
    List<Object[]> readSearch(String search);
    // 라이크페이지
    List<Object[]> readLikey(String kId);
    void modify(ModifyBody request);

    List<Pay> readPayList(String kId);

    String readPayImg(int rno);

    Pay readPayInfo(int rno);

    Member readMember(int mbno);

    void removeLikey(String kId, int link);

    // 득열이 추가분
    ClassMeta readOne(int link);

    List<String> readImg(int link);

    List<Object[]> readModify(String kId);

    boolean newFavorite(Long kakaoid, int link);

    boolean newReservation(ReservationDTO rDTO, String mbno);
}
