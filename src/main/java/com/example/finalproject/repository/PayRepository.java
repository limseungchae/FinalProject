package com.example.finalproject.repository;

import com.example.finalproject.model.Pay;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PayRepository extends JpaRepository<Pay, Long> {
    Pay findByCnameAndActdateAndMbno(String cname, String actdate, int mbno);
}
