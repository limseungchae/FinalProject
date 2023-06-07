package com.example.finalproject.dao;


import com.example.finalproject.model.ClassMeta;
import com.example.finalproject.model.Likey;
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

    Likey isExistLikey(String kakaoid, int link);

    void insertFavorite(Long kakaoid, int link);

    Pay isExistReservation(String cname, String actdate, int mbno);

    void insertReservation(Pay pay);
}
