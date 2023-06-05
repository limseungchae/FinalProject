package com.example.finalproject.dao;

import com.example.finalproject.model.ClassMeta;
import com.example.finalproject.model.Likey;
import com.example.finalproject.model.ModifyBody;
import com.example.finalproject.repository.ClassImgRepository;
import com.example.finalproject.repository.FrontRepository;
import com.example.finalproject.repository.LikeyRepository;
import com.example.finalproject.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("frtdao")
public class FrontDAOImpl implements FrontDAO{
    @Autowired
    private FrontRepository frontRepository;

    @Autowired
    private MemberRepository memberRepository;

    //득열이 추가분
    @Autowired
    private ClassImgRepository classImgRepository;

    @Autowired
    private LikeyRepository likeyRepository;

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
    public List<Object[]> selectLikey(String kId){

        return frontRepository.findLikeyByUserid(kId);
    }

    @Override
    public List<Object[]> selectMember(String kId) {

        return memberRepository.findMemberByUserid(kId);
    }

    @Override
    public void modifyMember(ModifyBody request) {
        String kId = request.getKakaoid();
        String birth = request.getBirth();
        String gender = request.getGender();
        String phone = request.getPhone();
        String type = request.getUserType();
        String agree = request.getAgree();

        memberRepository.modifyMemberBykId(kId, birth, gender, phone, type, agree);
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

    // 찜하기 로직
    @Override
    public void insertFavorite(Long kakaoid, int link) {
        Likey likey = new Likey();
        likey.setKakaoid(String.valueOf(kakaoid));
        likey.setLink(link);
        likeyRepository.save(likey);
    }


}
