package com.example.finalproject.dao;

import com.example.finalproject.model.ClassMeta;
import com.example.finalproject.repository.ClassImgRepository;
import com.example.finalproject.repository.FrontRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("frtdao")
public class FrontDAOImpl implements FrontDAO{
    @Autowired
    FrontRepository frontRepository;

    //득열이 추가분
    @Autowired
    ClassImgRepository classImgRepository;

    @Override
    public List<Object[]> selectMain() {
        return frontRepository.findMainAll();
    }

    @Override
    public List<Object[]> selectFilterMain(String ctg) {

        return frontRepository.findFilteredMain(ctg);
    }

    @Override
    public List<Object[]> selectSidoMain(String sido) {
        return frontRepository.findSidoMain(sido);
    }

    @Override
    public List<Object[]> selectFilterSidoMain(String ctg, String sido) {
        return frontRepository.findFilterSidoMain(ctg, sido);
    }

    // 서치페이지
    @Override
    public List<Object[]> selectSearch(String search) {
        String param = "%" + search + "%";

        return frontRepository.findClassLikeBySearch(param);
    }
    // 찜페이지
    @Override
    public List<Object[]> selectLikey(){

        return frontRepository.findLikeyByUserid();
    }

    // 득열이 추가분
    // 클래스 상세보기 클래스 정보
    @Override
    public ClassMeta selectOne(int link) {
        return frontRepository.findById((long) link).get();
    }

    // classimg 테이블에 link 값이 있는지 체크
    @Override
    public int selectLink(int link) {
        int isLink = 0;
        List<Object> classImgs = classImgRepository.findAllById(link);
        if(classImgs != null) isLink = 1;
        return isLink;
    }

    // classimg 테이블에서 이미지 데이터들 조회
    @Override
    public List<String> selectImgs(int link) {
        return classImgRepository.findCimgById(link);
    }


}
