package com.example.finalproject.service;

import com.example.finalproject.dao.FrontDAO;
import com.example.finalproject.model.ClassMeta;
import com.example.finalproject.model.ModifyBody;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service("frtsrv")
@RequiredArgsConstructor
public class FrontServiceImpl implements FrontService{

    private final Oauth2Kakao oauth2Kakao;

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

    // 서치페이지
    @Override
    public List<Object[]> readSearch(String search) {

        return frtdao.selectSearch(search);
    }
    // 찜 검색
    @Override
    public List<Object[]> readLikey(String kId) {
        return frtdao.selectLikey(kId);
    }

    @Override
    public List<Object[]> readModify(String kId) {

        return frtdao.selectMember(kId);
    }

    @Override
    public void modify(ModifyBody request) {
        frtdao.modifyMember(request);
    }

    // 득열이 추가분
    @Override
    public ClassMeta readOne(int link) {
        return frtdao.selectOne(link);
    }

    @Override
    public List<String> readImg(int link) {
        List<String> imgs = new ArrayList<>();

        if((frtdao.selectLink(link))!=0) imgs = frtdao.selectImgs(link);
        return imgs;
    }



}
