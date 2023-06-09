package com.example.finalproject.controller;

import com.example.finalproject.model.AddClass;
import com.example.finalproject.service.ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;



@RestController
@RequestMapping("/api")
public class ClassController {
    private final ClassService classService;
    @Autowired
    public ClassController(ClassService classService) {
        this.classService = classService;
    }
    @PostMapping(value = "/addclass", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> addClass(@RequestParam("cimg") MultipartFile cimg,
                                           @RequestParam("thumb") MultipartFile thumb,
                                           @RequestParam("timg") MultipartFile timg,
                                           @RequestParam("title") String title,
                                           @RequestParam("category") String category,
                                           @RequestParam("intro") String intro,
                                           @RequestParam("meterial") String meterial,
                                           @RequestParam("rules") String rules,
                                           @RequestParam("notice") String notice,
                                           @RequestParam("addr") String addr,
                                           @RequestParam("durat") String durat,
                                           @RequestParam("sdate") String sdate,
                                           @RequestParam("edate") String edate,
                                           @RequestParam("ctime") String ctime,
                                           @RequestParam("man") String man,
                                           @RequestParam("price") String price,
                                           @RequestParam("hash") String hash) {
        classService.addClass(cimg, thumb, timg, title, category, intro, meterial, rules, notice, addr, durat,
                sdate, edate, ctime, man, price, hash);
        return ResponseEntity.ok("Class added successfully");
    }
    @GetMapping("/update")
    public List<AddClass> getData(@RequestParam("cno") Long cno) {
        return classService.getData1(cno);
    }
    @GetMapping("/data")
    public List<AddClass> getData(@RequestParam("title")String title) {
        return classService.getData(title);
    }

    @DeleteMapping("/delete/{cno}")
    public void deleteData(@PathVariable Long cno) {
        classService.deleteData(cno);
    }

}
