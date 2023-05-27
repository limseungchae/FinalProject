package com.example.finalproject.repository;

import com.example.finalproject.model.ClassMeta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface FrontRepository extends JpaRepository<ClassMeta, Long> {

    @Transactional
    @Query("from ClassMeta ")
    List<ClassMeta> findAll();
}
