package com.example.finalproject.service;

import com.example.finalproject.model.AddClass;
import com.example.finalproject.repository.AddClassRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import org.springframework.transaction.annotation.Transactional;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;



@Service
@Transactional
public class ClassServiceImpl implements ClassService {

    private final AddClassRepository addClassRepository;
    @Autowired
    public ClassServiceImpl(AddClassRepository classRepository) {
        this.addClassRepository = classRepository;
    }
    public void addClass(MultipartFile cimg, MultipartFile thumb, MultipartFile timg,
                         String title, String category, String intro, String meterial,
                         String rules, String notice, String addr, String durat, String sdate,
                         String edate, String ctime, String man, String  price, String  hash) {

        // 현재 날짜를 기준으로 디렉토리 이름 설정
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd_HHmmss");
        String directoryName = dateFormat.format(new Date());

        // 디렉토리를 생성할 경로
        String parentDirectoryPath = "C:/Java/nginx-1.24.0/nginx-1.24.0/html/cdn";

        // 파일 이름들
        String[] fileNames = {"cimg", "thumb", "timg"};

        // 반복문을 통해 각 파일에 대한 디렉토리 생성과 파일 저장 수행
        for (String fileName : fileNames) {
            String directoryPath = parentDirectoryPath + "/" + directoryName + "/" + fileName;

            // 디렉토리 생성
            File directory = new File(directoryPath);
            if (!directory.exists()) {
                if (directory.mkdirs()) {
                    System.out.println("디렉토리 생성 성공");
                } else {
                    System.out.println("디렉토리 생성 실패");
                }
            } else {
                System.out.println("디렉토리 이미 존재");
            }

            // 파일 저장
            String filePath = directoryPath + "/" + fileName + ".png";
            File file = new File(filePath);

            try {
                if (file.createNewFile()) {
                    System.out.println("파일 생성 성공");

                    // 파일 전송
                    MultipartFile multipartFile;
                    if (fileName.equals("cimg")) {
                        multipartFile = cimg;
                    } else if (fileName.equals("thumb")) {
                        multipartFile = thumb;
                    } else {
                        multipartFile = timg;
                    }

                    multipartFile.transferTo(file);
                } else {
                    System.out.println("파일 생성 실패");
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        // 나머지 데이터 처리 및 저장
        AddClass addClass = new AddClass();
        addClass.setCimg(directoryName + "/cimg/cimg.png");
        addClass.setThumb(directoryName + "/thumb/thumb.png");
        addClass.setTimg(directoryName + "/timg/timg.png");
        addClass.setTitle(title);
        addClass.setCategory(category);
        addClass.setIntro(intro);
        addClass.setMeterial(meterial);
        addClass.setRules(rules);
        addClass.setNotice(notice);
        addClass.setAddr(addr);
        addClass.setDurat(durat);
        addClass.setSdate(sdate);
        addClass.setEdate(edate);
        addClass.setCtime(ctime);
        addClass.setMan(man);
        addClass.setPrice(price);
        addClass.setHash(hash);

        addClassRepository.save(addClass);
    }

    @Override
    public List<AddClass> getData(String title) {
        return addClassRepository.findByTitleContainingIgnoreCase(title);
    }


    @Override
    public List<AddClass> getData1(Long cno) {
        return addClassRepository.findByCno(cno);
    }

    @Override
    public void deleteData(Long cno) {
        addClassRepository.deleteByCno(cno);
    }

}
