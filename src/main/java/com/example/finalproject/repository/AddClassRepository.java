package com.example.finalproject.repository;

import com.example.finalproject.model.AddClass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddClassRepository extends JpaRepository<AddClass,Long> {
    @Query("SELECT c FROM AddClass c WHERE c.title LIKE %:title%")
    List<AddClass> findByTitleContainingIgnoreCase(@Param("title") String title);

    @Query("SELECT c FROM AddClass c WHERE c.cno = :cno")
    List<AddClass> findByCno(@Param("cno") Long cno);

    void deleteByCno(Long cno);

}
