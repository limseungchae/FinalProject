package com.example.finalproject.controller;

import com.example.finalproject.dto.ClassDTO;
import com.example.finalproject.model.AddClass;
import com.example.finalproject.service.ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.attribute.AclFileAttributeView;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ClassController {

    @Autowired
    private  ClassService classService;

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

//    @PostMapping(value = "/updateclass", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
//    public ResponseEntity<String> updateClass(@RequestParam(value = "cno") Long cno, @RequestParam(value = "cimg", required = false) MultipartFile cimg,
//                                              @RequestParam(value = "thumb", required = false) MultipartFile thumb, @RequestParam(value = "timg", required = false) MultipartFile timg,
//                                              @RequestParam(value = "title", required = false) String title, @RequestParam(value = "category") String category,
//                                              @RequestParam(value = "intro") String intro, @RequestParam(value = "meterial") String meterial,
//                                              @RequestParam(value = "rules") String rules, @RequestParam(value = "notice") String notice,
//                                              @RequestParam(value = "addr") String addr, @RequestParam(value = "durat") String durat,
//                                              @RequestParam(value = "sdate") String sdate, @RequestParam(value = "edate") String edate,
//                                              @RequestParam(value = "ctime") String ctime, @RequestParam(value = "man") String man,
//                                              @RequestParam(value = "price") String price, @RequestParam(value = "hash") String hash) {
//        System.out.println(cno);
//        try {
//
////            // 유효성 검사
//            if (cno == null || cimg == null || thumb == null || timg == null || title == null || category == null ||
//                    intro == null || meterial == null || rules == null || notice == null || addr == null ||
//                    durat == null || sdate == null || edate == null || ctime == null || man == null || price == null || hash == null) {
//                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Required fields are missing");
//            }
//
//            // 파일 유효성 검사
//            if (cimg.isEmpty() || thumb.isEmpty() || timg.isEmpty()) {
//                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Image files are missing");
//            }
//
//            // 업데이트 작업 수행
//            classService.updateClass(cno, cimg, thumb, timg, title, category, intro, meterial, rules, notice, addr, durat, sdate, edate, ctime, man, price, hash);
//
//            return ResponseEntity.ok("Class updated successfully");
//        } catch (Exception e) {
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update class");
//        }
//    }

    @PostMapping(value = "/updateclass/{cno}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> updateClass(@PathVariable Long cno,
                                              @RequestParam("cimg") MultipartFile cimg,
                                              @RequestParam("thumb") MultipartFile thumb,
                                              @RequestParam("timg") MultipartFile timg,
                                              @ModelAttribute ClassDTO classDTO) {

        classService.updateClass(cno, cimg, thumb, timg, classDTO);

        try {
            System.out.println(cno);
//            classService.updateClass(classDto);
            return ResponseEntity.ok("Class updated successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update class");
        }
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
