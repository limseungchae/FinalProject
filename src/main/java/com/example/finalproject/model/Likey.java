package com.example.finalproject.model;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "likey")
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Likey {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(insertable = false, updatable = false)
    private Long lkno;
    private String kakaoid;
    @Column(name = "link")
    private int link;
    @CreatedDate
    @Column(insertable = false, updatable = false)
    private LocalDateTime regdate;
/*
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "link", referencedColumnName = "link")
    private ClassMeta classMeta;*/

}
