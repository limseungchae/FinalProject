package com.example.finalproject.service;

import com.example.finalproject.dto.ClassDTO;
import com.example.finalproject.model.AddClass;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

public interface ClassService {
    void addClass(MultipartFile cimg, MultipartFile thumb, MultipartFile timg,
                  String title, String category, String intro, String meterial,
                  String rules, String notice, String addr, String durat, String sdate,
                  String edate, String ctime, String man, String price, String hash);


    List<AddClass> getData(String title);


    List<AddClass> getData1(Long cno);


    void deleteData(Long cno);

//    void updateClass(ClassDTO classDTO);
    //void updateClass(Long cno, MultipartFile cimg, MultipartFile thumb, MultipartFile timg, String title, String category, String intro, String meterial, String rules, String notice, String addr, String durat, String sdate, String edate, String ctime, String man, String price, String hash);

    void updateClass(Long cno, MultipartFile cimgPath, MultipartFile thumbPath, MultipartFile timgPath, ClassDTO classDTO);


}
