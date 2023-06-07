package com.example.finalproject.dao;


import com.example.finalproject.model.ClassMeta;
import com.example.finalproject.model.ModifyBody;
import com.example.finalproject.model.Pay;

import java.util.List;

public interface FrontDAO {
    List<Object[]> selectMain();

    List<Object[]> selectFilterMain(String ctg);

    List<Object[]> selectSidoMain(String sido);

    List<Object[]> selectFilterSidoMain(String category, String sido);

    // 서치페이지
    List<Object[]> selectSearch(String search);
    // 찜페이지
    List<Object[]> selectLikey(String kId);
    void modifyMember(ModifyBody request);

    // 득열이 추가분
    ClassMeta selectOne(int link);

    List<String> selectImgs(int link);

    int selectLink(int link);

    List<Object[]> selectMember(String kId);

    void insertFavorite(Long kakaoid, int link);

    boolean selectReservation(int mbno);    // 예약 중복 방지용 미리 만들어둠

    void insertFavorite(Pay pay);

    List<Pay> searchPayList(String kId);
}
