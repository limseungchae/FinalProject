package com.example.finalproject.dto;

import lombok.*;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClassDTO {
    private String title;
    private String category;
    private String intro;
    private String meterial;
    private String rules;
    private String notice;
    private String addr;
    private String durat;
    private String sdate;
    private String edate;
    private String ctime;
    private String man;
    private String price;
    private String hash;
    private MultipartFile cimgPath;
    private MultipartFile thumbPath;
    private MultipartFile timgPath;

}
