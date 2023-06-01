package com.example.finalproject.dao;


import com.example.finalproject.model.ClassMeta;

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

    // 득열이 추가분
    ClassMeta selectOne(int link);

    List<String> selectImgs(int link);

    int selectLink(int link);

    List<Object[]> selectMember(String kId);
}
