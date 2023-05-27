package com.example.finalproject.model;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "CLASSMETA")
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ClassMeta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long link;
    private String cname;
    private String derail;
    private String sido;
    private String gugun;
    private String strdate;
    private String enddate;
    private String duration;
    private String hash;
    private String man;
    private String intro;
    private String material;
    private String rule;
    private String notice;
    private String type;
    private String tutername;
    private String tuterimg;
    private String category;
    private String star;
    private int cntrvs;
    private double rate;
    private int sale;
    private String thumbnail;

    @CreatedDate
    @Column(insertable = false, updatable = false)
    private Date regdate;

    // front/index/main에서 사용할 생성자 구현
    public ClassMeta(Long link, String cname, String sido, String gugun, String category, String star, int cntrvs, double rate, int sale, String thumbnail) {
        this.link = link;
        this.cname = cname;
        this.sido = sido;
        this.gugun = gugun;
        this.category = category;
        this.star = star;
        this.cntrvs = cntrvs;
        this.rate = rate;
        this.sale = sale;
        this.thumbnail = thumbnail;
    }
}
