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

    public ClassController(ClassService classService) {
        this.classService = classService;
    }

//    @PostMapping("/addclass")
//    public ResponseEntity<String> addClass(@RequestBody AddClass data) {
//        try {
//            myClassService.saveClass(data);
//            return ResponseEntity.ok("Data saved successfully");
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to save data");
//        }
//    }

    @PostMapping(value = "/addclass", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> addClass(@RequestParam("cimg") MultipartFile cimg,
                                           @RequestParam("thumb") MultipartFile thumb,
                                           @RequestParam("timg") MultipartFile timg,
                                           @RequestParam("title") String title,
                                           @RequestParam("category") String category,
                                           @RequestParam("intro") String intro,
                                           @RequestParam("meterial") String meterial,
                                           @RequestParam("rule") String rule,
                                           @RequestParam("notice") String notice,
                                           @RequestParam("addr") String addr,
                                           @RequestParam("durat") String durat,
                                           @RequestParam("sdate") String sdate,
                                           @RequestParam("edate") String edate,
                                           @RequestParam("ctime") String ctime,
                                           @RequestParam("man") String man,
                                           @RequestParam("price") int price,
                                           @RequestParam("hash") List<String> hash) {
        classService.addClass(cimg, thumb, timg, title, category, intro, meterial, rule, notice, addr, durat,
                sdate, edate, ctime, man, price, hash);
        return ResponseEntity.ok("Class added successfully");
    }

//    @GetMapping("/update/{cno}")
//    public ResponseEntity<List<AddClass>> getClassesByCategory(@PathVariable Long cno) {
//        List<AddClass> classes = classService.getClassesByCno(cno);
//        if (classes.isEmpty()) {
//            return ResponseEntity.noContent().build();
//        }
//        return ResponseEntity.ok(classes);
//    }
//
//    @GetMapping("/classlist")
//    public ResponseEntity<List<AddClass>> getClassesByTitleContainingIgnoreCase(@PathVariable String keyword) {
//        List<AddClass> classes = classService.getClassesByTitleContainingIgnoreCase(keyword);
//        if (classes.isEmpty()) {
//            return ResponseEntity.noContent().build();
//        }
//        return ResponseEntity.ok(classes);
//    }
}
