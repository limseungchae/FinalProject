package com.example.finalproject.repository;

import com.example.finalproject.model.Pay;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PayRepository extends JpaRepository<Pay, Long> {
    // 예약 중복 방지용 미리 만들어둠
    String findCnameByMbno(int mbno);
}
