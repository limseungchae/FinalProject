package com.example.finalproject.model;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@Table(name = "MEMBER3")
@Getter
@Setter
@AllArgsConstructor
@Builder
public class

User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MBNO", insertable = false, updatable = false)
    private Long mbno;

    @Column(name = "KAKAOID")
    private Long kakaoid;

    @Column(name = "NICKNAME")
    private String nickname;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "REGDATE", insertable = false, updatable = false)
    @CreatedDate
    private LocalDateTime regdate;
}