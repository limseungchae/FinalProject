package com.example.finalproject.service;

import com.example.finalproject.dao.FrontDAO;
import com.example.finalproject.model.ClassMeta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service("frtsrv")
public class FrontServiceImpl implements FrontService{
    @Autowired
    FrontDAO frtdao;

    @Override
    public List<Object[]> readMain(String category, String sido) {

        if (Objects.equals(category, "all") || Objects.equals(category, "null")) { // 카테고리: all 및 초기값
            if (Objects.equals(sido, "지역선택") || Objects.equals(sido, "전체")) { // 카테고리만
                return frtdao.selectMain();
            } else { // 카테고리 및 지역
                return frtdao.selectSidoMain(sido);
            }
        } else {
            if (Objects.equals(sido, "지역선택") || Objects.equals(sido, "전체")) { // 카테고리 선택
                return frtdao.selectFilterMain(category); // 카테고리만
            } else { // 카테고리 및 지역
                return frtdao.selectFilterSidoMain(category, sido);
            }
        }
    }

    @Override
    public List<Object[]> readSearch(String search) {

        return frtdao.selectSearch(search);
    }

    @Override
    public List<Object[]> readLikey() {
        return frtdao.selectLikey();
    }
}
