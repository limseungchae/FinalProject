package com.example.finalproject.model;

import lombok.*;
import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "pay")
public class Pay {
    @Column(insertable = false, updatable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // 김충일
    // ono => rno
    private Long rno;
    private int mbno;
    private String cname;
    private int quantity;
    private int totprice;
    private String actdate;
    private String tid;
    private LocalDateTime paydate;
}