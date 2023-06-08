package com.example.finalproject.model;

import lombok.*;

import javax.persistence.*;


@Entity
@Table(name = "ADD_CLASS")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class AddClass {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cno;
    private String title;
    private String category;
    private String intro;
    private String meterial;
    private String rules;
    private String notice;
    private String addr;
    private String cimg;
    private String thumb;
    private String timg;
    private String durat;
    private String sdate;
    private String edate;
    private String ctime;
    private String man;
    private String price;
    private String hash;
}
