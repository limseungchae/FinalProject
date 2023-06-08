package com.example.finalproject.repository;
import com.example.finalproject.model.Pay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;
import java.util.Objects;
public interface PayRepository extends JpaRepository<Pay, Long> {
    // 예약 중복 방지용 미리 만들어둠
    String findCnameByMbno(int mbno);

    @Query("from Pay where mbno = :mbno")
    List<Pay> findAllByMbno(@Param("mbno") int mbno);


    @Query("select cname from Pay where rno = :rno")
    String findCnameByRno(@Param("rno") Long rno);

    @Query("from Pay where rno = :rno")
    Pay findAllByRno(@Param("rno") Long rno);

    Pay findByCnameAndActdateAndMbno(String cname, String actdate, int mbno);
}