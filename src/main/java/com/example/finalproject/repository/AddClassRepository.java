package com.example.finalproject.repository;

import com.example.finalproject.model.AddClass;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AddClassRepository extends JpaRepository<AddClass,Long> {

    List<AddClass> findByCno(Long cno);
    List<AddClass> findByTitleContainingIgnoreCase(String keyword);

}
