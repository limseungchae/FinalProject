package com.example.finalproject.repository;

import com.example.finalproject.model.ClassImg;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface ClassImgRepository extends JpaRepository<ClassImg, String> {

    @Query(value = "select * from CLASSIMG where LINK = :link", nativeQuery = true)
    List<Object> findAllById(@Param("link") int link);

    @Query(value = "select CIMG from CLASSIMG where link = :link", nativeQuery = true)
    List<String> findCimgById(@Param("link") int link);
}
