package com.example.finalproject.repository;

import com.example.finalproject.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value = "select * from MEMBER where KAKAOID = :id", nativeQuery = true)
    User findUserByKakaoid(@Param("id") Long id);
}