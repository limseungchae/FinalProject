package com.example.finalproject.model;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "LIKEY")
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Likey {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long likey;
    private int kakaoid;
    @Column(name = "link")
    private int link;
    @CreatedDate
    @Column(insertable = false, updatable = false)
    private Date regdate;
/*
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "link", referencedColumnName = "link")
    private ClassMeta classMeta;*/

}
