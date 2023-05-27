package com.example.finalproject.repository;

import com.example.finalproject.model.ClassMeta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FrontRepository extends JpaRepository<ClassMeta, Long> {
}
