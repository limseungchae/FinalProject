package com.example.finalproject.repository;

import com.example.finalproject.model.ClassMeta;
import com.example.finalproject.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MemberRepository extends JpaRepository<Member, Long> {

    @Query("select nickname, birth, gender, phone, type, agree from Member where kakaoid = :kId")
    List<Object[]> findMemberByUserid(@Param("kId") String kId);


}
