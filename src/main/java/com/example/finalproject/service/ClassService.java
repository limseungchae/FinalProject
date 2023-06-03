package com.example.finalproject.service;

import com.example.finalproject.model.AddClass;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ClassService {
    void addClass(MultipartFile cimg, MultipartFile thumb, MultipartFile timg,
                  String title, String category, String intro, String meterial,
                  String rule, String notice, String addr, String durat, String sdate,
                  String edate, String ctime, String man, int price, List<String> hash);

//    void saveClass(AddClass data);
//    List<AddClass> getClassesByCno(Long cno);
//    List<AddClass> getClassesByTitleContainingIgnoreCase(String keyword);
}
