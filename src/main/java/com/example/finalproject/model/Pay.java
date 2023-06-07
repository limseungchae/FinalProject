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
    private Long ono;       // 주문번호
    private int mbno;
    private String cname;
    private int quantity;
    private int totprice;
    private String actdate;
    private String tid;     // 결제번호
    private LocalDateTime paydate;
}
