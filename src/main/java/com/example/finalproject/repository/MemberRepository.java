package com.example.finalproject.repository;

import com.example.finalproject.model.ClassMeta;
import com.example.finalproject.model.Member;
import com.example.finalproject.model.ModifyBody;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface MemberRepository extends JpaRepository<Member, Long> {

    @Query("select nickname, birth, gender, phone, type, agree from Member where kakaoid = :kId")
    List<Object[]> findMemberByUserid(@Param("kId") String kId);

    @Modifying
    @Transactional
    @Query("UPDATE Member SET birth = :birth, gender = :gender, phone = :phone, type = :type, agree = :agree WHERE kakaoid = :kId")
    void modifyMemberBykId(@Param("kId") String kId,@Param("birth") String birth, @Param("gender") String gender,@Param("phone") String phone,@Param("type") String type,@Param("agree") String agree);
}
