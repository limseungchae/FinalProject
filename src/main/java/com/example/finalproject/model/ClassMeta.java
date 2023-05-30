package com.example.finalproject.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;


@Entity
@Table(name = "tclass")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class ClassMeta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cno;
    @NotBlank(message = "강의명은 필수 입력항목입니다!!")
    private String cname;
    @NotBlank(message = "카테고리는 필수 입력항목입니다!!")
    private Integer category;
    @NotBlank(message = "커리큘럼은 필수 입력항목입니다!!")
    private String intro;

    private String meteri;
    @NotBlank(message = "강의장 주소는 필수 입력항목입니다!!")
    private String rule;
    @NotBlank(message = "강의장 주소는 필수 입력항목입니다!!")
    private String notice;

    private String mmjd;

    private String sale;


    private String vegtaile;

    private String thumb;
    @NotBlank(message = "강사님 이름은 필수입니다!!")
    private String tname;

    private String hash;
    @NotBlank(message = "소요시간은 필수 입력항목입니다!!")
    private String durat;
    @NotBlank(message = "시작일은 필수 입력항목입니다!!")
    private String sdate;
    @NotBlank(message = "종료일은 필수 입력항목입니다!!")
    private String edate;
    @NotBlank(message = "인원수는 필수 입력항목입니다!!")
    private String man;
    @NotBlank(message = "가격은 필수 입력항목입니다!!")
    private Integer price;

}
