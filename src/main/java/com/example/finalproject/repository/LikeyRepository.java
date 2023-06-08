package com.example.finalproject.repository;

import com.example.finalproject.model.Likey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface LikeyRepository extends JpaRepository<Likey, Long> {
    @Query("from Likey where kakaoid = :kakaoid and link = :link")
    Likey findByKakaoidAndLink(@Param("kakaoid")String kakaoid, @Param("link") int link);

    @Modifying
    @Transactional
    @Query("delete from Likey where kakaoid = :kId and link = :link")
    void deleteLikey(@Param("kId")String kId, @Param("link")int link);
}
