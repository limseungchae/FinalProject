package com.example.finalproject.service;

import com.example.finalproject.model.AddClass;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ClassService {
    void addClass(MultipartFile cimg, MultipartFile thumb, MultipartFile timg,
                  String title, String category, String intro, String meterial,
                  String rule, String notice, String addr, String durat, String sdate,
                  String edate, String ctime, String man, int price, List<String> hash);

//    void saveClass(Class data);
//    List<Class> getClassesByCno(Long cno);
//    List<Class> getClassesByTitleContainingIgnoreCase(String keyword);
}
