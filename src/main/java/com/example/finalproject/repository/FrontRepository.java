package com.example.finalproject.repository;

import com.example.finalproject.model.ClassMeta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface FrontRepository extends JpaRepository<ClassMeta, Long> {

    @Query("select link, cname, sido, gugun, category, star, cntrvs, rate, sale, thumbnail from ClassMeta ")
    List<Object[]> findMainAll();

    @Query("select link, cname, sido, gugun, category, star, cntrvs, rate, sale, thumbnail from ClassMeta where category = :ctg ")
    List<Object[]> findFilteredMain(@Param("ctg") String ctg);

    @Query("select link, cname, sido, gugun, category, star, cntrvs, rate, sale, thumbnail from ClassMeta where sido = :sido ")
    List<Object[]> findSidoMain(@Param("sido") String sido);

    @Query("select link, cname, sido, gugun, category, star, cntrvs, rate, sale, thumbnail from ClassMeta where category = :ctg and sido = :sido ")
    List<Object[]> findFilterSidoMain(@Param("ctg") String ctg, @Param("sido") String sido);
}
