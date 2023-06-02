package com.example.finalproject.model;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@Table(name = "MEMBER")
@Getter
@Setter
@AllArgsConstructor
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MBNO", insertable = false, updatable = false)
    private Long mbno;

    @Column(name = "KAKAOID")
    private String kakaoid;

    @Column(name = "NICKNAME")
    private String nickname;

    @Column(name = "EMAIL")
    private String email;
    private String birth;
    private String phone;
    private String type;
    private String agree;
    private String gender;

    @Column(name = "REGDATE", insertable = false, updatable = false)
    @CreatedDate
    private LocalDateTime regdate;
}
