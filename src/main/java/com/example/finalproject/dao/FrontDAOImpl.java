package com.example.finalproject.dao;

import com.example.finalproject.model.*;
import com.example.finalproject.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Collections;
import java.util.List;
import java.util.Objects;

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

    @Autowired
    private PayRepository payRepository;

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

    @Override
    public List<Pay> searchPayList(int mbno) {
        return payRepository.findAllByMbno(mbno);
    }

    @Override
    public String selectPayImg(int rno) {
        Long longRno = Long.valueOf(rno);
        String cname = payRepository.findCnameByRno(longRno);
        // cname => Link
        Long link = frontRepository.findLinkByCname(cname);
        // link => thumbnail
        String payImg = frontRepository.findThumbnailByLink(link);

        return payImg;
    }

    @Override
    public Pay selectInfo(int rno) {
        Long longRno = Long.valueOf(rno);
        return payRepository.findAllByRno(longRno);
    }

    @Override
    public Member selectMemberByMbno(int mbno) {
        Long longMbno = Long.valueOf(mbno);
        return memberRepository.findMemberByMbno(longMbno);
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
    public Likey isExistLikey(String kakaoid, int link) {
        return likeyRepository.findByKakaoidAndLink(kakaoid, link);
    }
    @Override
    public void deleteLikey(String kId, int link) {
        likeyRepository.deleteLikey(kId, link);
    }

    @Override
    public void insertFavorite(Long kakaoid, int link) {
        Likey likey = new Likey();
        likey.setKakaoid(String.valueOf(kakaoid));
        likey.setLink(link);
        likeyRepository.save(likey);
    }

    // 예약하기 로직
    @Override
    public Pay isExistReservation(String cname, String actdate, int mbno) {
        return payRepository.findByCnameAndActdateAndMbno(cname, actdate, mbno);
    }
    @Override
    public void insertReservation(Pay pay) {
        payRepository.save(pay);
    }

    @Override
    public int selectMbnoByKakaoid(String kakaoid) {
        return Math.toIntExact(memberRepository.findMbnoBykId(kakaoid));
    }

    @Override
    public void updateReservation(int mbno, String tid, String paydate, String cname) {
        frontRepository.updateReservation(tid, paydate, mbno, cname);
    }

}
