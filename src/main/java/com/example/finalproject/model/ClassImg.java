package com.example.finalproject.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name = "CLASSIMG")
@NoArgsConstructor
@AllArgsConstructor
public class ClassImg {

    private Long link;

    @Id
    @Column(name = "CIMG")
    private String cimg;
}
