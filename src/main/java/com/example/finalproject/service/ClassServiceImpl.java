package com.example.finalproject.service;

import com.example.finalproject.dto.ClassDTO;
import com.example.finalproject.model.AddClass;
import com.example.finalproject.repository.AddClassRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.mock.web.MockMultipartFile;



import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;


@Service
@Transactional
public class ClassServiceImpl implements ClassService {

    private final AddClassRepository addClassRepository;

    @Autowired
    public ClassServiceImpl(AddClassRepository classRepository) {
        this.addClassRepository = classRepository;
    }

    @Override
    public void addClass(MultipartFile cimg, MultipartFile thumb, MultipartFile timg,
                         String title, String category, String intro, String meterial,
                         String rules, String notice, String addr, String durat, String sdate,
                         String edate, String ctime, String man, String price, String hash) {

        // 현재 날짜를 기준으로 디렉토리 이름 설정
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd");
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
    @Override
    public void updateClass(Long cno, MultipartFile cimg, MultipartFile thumb, MultipartFile timg, ClassDTO classDTO) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd");
        String directoryName = dateFormat.format(new Date());
        String parentDirectoryPath = "C:/Java/nginx-1.24.0/nginx-1.24.0/html/cdn";
        String[] fileNames = {"cimg", "thumb", "timg"};


        try {


            // Perform file storage operations
            for (String fileName : fileNames) {
                String directoryPath = parentDirectoryPath + "/" + directoryName + "/" + fileName;

                // Create directory
                File directory = new File(directoryPath);
                if (!directory.exists()) {
                    if (directory.mkdirs()) {
                        System.out.println("Directory created successfully");
                    } else {
                        System.out.println("Failed to create directory");
                    }
                } else {
                    System.out.println("Directory already exists");
                }

                String uniqueFileName = UUID.randomUUID().toString();
                String filePath = directoryPath + "/" + uniqueFileName + ".png";
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

            System.out.println("업데이트 클래스");
            Optional<AddClass> optionalClass = addClassRepository.findById(cno);
            if (optionalClass.isPresent()) {
                AddClass existingClass = optionalClass.get();

                // 이미지 파일 업로드 처리 등 필요한 로직을 수행합니다.

                // ClassDTO에서 받아온 필드 값으로 업데이트합니다.
                existingClass.setTitle(classDTO.getTitle());
                existingClass.setCategory(classDTO.getCategory());
                existingClass.setIntro(classDTO.getIntro());
                existingClass.setMeterial(classDTO.getMeterial());
                existingClass.setRules(classDTO.getRules());
                existingClass.setNotice(classDTO.getNotice());
                existingClass.setAddr(classDTO.getAddr());
                existingClass.setDurat(classDTO.getDurat());
                existingClass.setSdate(classDTO.getSdate());
                existingClass.setEdate(classDTO.getEdate());
                existingClass.setCtime(classDTO.getCtime());
                existingClass.setMan(classDTO.getMan());
                existingClass.setPrice(classDTO.getPrice());
                existingClass.setHash(classDTO.getHash());

                // 데이터베이스에 변경 내용을 저장합니다.
                addClassRepository.save(existingClass);
            } else {
                // 클래스를 찾지 못한 경우에 대한 예외 처리
                throw new RuntimeException("Class not found with cno: " + cno);
            }


        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }


//    @Override
//    public void updateClass(Long cno, MultipartFile cimg, MultipartFile thumb, MultipartFile timg, ClassDTO classDTO) {
//        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd");
//        String directoryName = dateFormat.format(new Date());
//        String parentDirectoryPath = "C:/Java/nginx-1.24.0/nginx-1.24.0/html/cdn";
//        String[] fileNames = {"cimg", "thumb", "timg"};
//
//        // Create and manage EntityManager
//        EntityManagerFactory emf = Persistence.createEntityManagerFactory("default");
//        EntityManager em = emf.createEntityManager();
//        EntityTransaction tx = em.getTransaction();
//
//        try {
//            tx.begin();
//
//            // Perform file storage operations
//            for (String fileName : fileNames) {
//                String directoryPath = parentDirectoryPath + "/" + directoryName + "/" + fileName;
//
//                // Create directory
//                File directory = new File(directoryPath);
//                if (!directory.exists()) {
//                    if (directory.mkdirs()) {
//                        System.out.println("Directory created successfully");
//                    } else {
//                        System.out.println("Failed to create directory");
//                    }
//                } else {
//                    System.out.println("Directory already exists");
//                }
//
//                String uniqueFileName = UUID.randomUUID().toString();
//                String filePath = directoryPath + "/" + uniqueFileName + ".png";
//                File file = new File(filePath);
//
//                try {
//                    if (file.createNewFile()) {
//                        System.out.println("파일 생성 성공");
//
//                        // 파일 전송
//                        MultipartFile multipartFile;
//                        if (fileName.equals("cimg")) {
//                            multipartFile = cimg;
//                        } else if (fileName.equals("thumb")) {
//                            multipartFile = thumb;
//                        } else {
//                            multipartFile = timg;
//                        }
//
//                        multipartFile.transferTo(file);
//                    } else {
//                        System.out.println("파일 생성 실패");
//                    }
//                } catch (IOException e) {
//                    e.printStackTrace();
//                }
//
//
//                System.out.println("업데이트 클래스");
//                Optional<AddClass> optionalClass = addClassRepository.findById(cno);
//                if (optionalClass.isPresent()) {
//                    AddClass existingClass = optionalClass.get();
//
//                    // 이미지 파일 업로드 처리 등 필요한 로직을 수행합니다.
//
//                    // ClassDTO에서 받아온 필드 값으로 업데이트합니다.
//                    existingClass.setTitle(classDTO.getTitle());
//                    existingClass.setCategory(classDTO.getCategory());
//                    existingClass.setIntro(classDTO.getIntro());
//                    existingClass.setMeterial(classDTO.getMeterial());
//                    existingClass.setRules(classDTO.getRules());
//                    existingClass.setNotice(classDTO.getNotice());
//                    existingClass.setAddr(classDTO.getAddr());
//                    existingClass.setDurat(classDTO.getDurat());
//                    existingClass.setSdate(classDTO.getSdate());
//                    existingClass.setEdate(classDTO.getEdate());
//                    existingClass.setCtime(classDTO.getCtime());
//                    existingClass.setMan(classDTO.getMan());
//                    existingClass.setPrice((classDTO.getPrice()));
//                    existingClass.setHash(classDTO.getHash());
//
//                    // 데이터베이스에 변경 내용을 저장합니다.
//                    addClassRepository.save(existingClass);
//                } else {
//                    // 클래스를 찾지 못한 경우에 대한 예외 처리
//                    throw new RuntimeException("Class not found with cno: " + cno);
//                }
//            }
//        }catch (Exception ex) {ex.printStackTrace();}
//
//    }
}
//    public void updateClass(ClassDTO classDto) {
//        // Get the class by its cno.
//        AddClass upclass = addClassRepository.findById(classDto.getCno()).get();
//
//        // Update the class's properties with the values from the DTO.
//        upclass.setCimg(classDto.getCimg());
//        upclass.setThumb(classDto.getThumb());
//        upclass.setTimg(classDto.getTimg());
//        upclass.setTitle(classDto.getTitle());
//        upclass.setCategory(classDto.getCategory());
//        upclass.setIntro(classDto.getIntro());
//        upclass.setMeterial(classDto.getMeterial());
//        upclass.setRules(classDto.getRules());
//        upclass.setNotice(classDto.getNotice());
//        upclass.setAddr(classDto.getAddr());
//        upclass.setDurat(classDto.getDurat());
//        upclass.setSdate(classDto.getSdate());
//        upclass.setEdate(classDto.getEdate());
//        upclass.setCtime(classDto.getCtime());
//        upclass.setMan(classDto.getMan());
//        upclass.setPrice(classDto.getPrice());
//        upclass.setHash(classDto.getHash());
//
//        // Save the class to the database.
//        addClassRepository.save(upclass);
//    }



//    @Override
//    public void updateClass(Long cno, MultipartFile cimg, MultipartFile thumb, MultipartFile timg, String title, String category, String intro, String meterial, String rules, String notice, String addr, String durat, String sdate, String edate, String ctime, String man, String price, String hash) {
//        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd");
//        String directoryName = dateFormat.format(new Date());
//        String parentDirectoryPath = "C:/Java/nginx-1.24.0/nginx-1.24.0/html/cdn";
//        String[] fileNames = {"cimg", "thumb", "timg"};
//
//        // Create and manage EntityManager
//        EntityManagerFactory emf = Persistence.createEntityManagerFactory("default");
//        EntityManager em = emf.createEntityManager();
//        EntityTransaction tx = em.getTransaction();
//
//        try {
//            tx.begin();
//
//            // Perform file storage operations
//            for (String fileName : fileNames) {
//                String directoryPath = parentDirectoryPath + "/" + directoryName + "/" + fileName;
//
//                // Create directory
//                File directory = new File(directoryPath);
//                if (!directory.exists()) {
//                    if (directory.mkdirs()) {
//                        System.out.println("Directory created successfully");
//                    } else {
//                        System.out.println("Failed to create directory");
//                    }
//                } else {
//                    System.out.println("Directory already exists");
//                }
//
//                // Store file
//                String uniqueFileName = UUID.randomUUID().toString();
//                String fileNameWithUUID = uniqueFileName + ".png";
//                String filePath = directoryPath + "/" + fileNameWithUUID;
//                File file = new File(filePath);
//
//                try {
//                    if (file.createNewFile()) {
//                        System.out.println("File created successfully");
//
//                        // 파일 전송
//                        try (OutputStream outputStream = new FileOutputStream(file)) {
//                            if (fileName.equals("cimg")) {
//                                outputStream.write(cimg.getBytes());
//                            } else if (fileName.equals("thumb")) {
//                                outputStream.write(thumb.getBytes());
//                            } else {
//                                outputStream.write(timg.getBytes());
//                            }
//                        }
//
//                        System.out.println("File transfer completed");
//                    } else {
//                        System.out.println("Failed to create file");
//                    }
//                } catch (IOException e) {
//                    e.printStackTrace();
//                }
//            }
//
//            // 데이터 처리 및 저장 수행
//            AddClass addClass = new AddClass();
//            addClass.setCimg(directoryName + "/cimg/cimg.png");
//            addClass.setThumb(directoryName + "/thumb/thumb.png");
//            addClass.setTimg(directoryName + "/timg/timg.png");
//            // addClass 개체의 다른 속성 설정
//            addClass.setTitle(title);
//            addClass.setCategory(category);
//            addClass.setIntro(intro);
//            addClass.setMeterial(meterial);
//            addClass.setRules(rules);
//            addClass.setNotice(notice);
//            addClass.setAddr(addr);
//            addClass.setDurat(durat);
//            addClass.setSdate(sdate);
//            addClass.setEdate(edate);
//            addClass.setCtime(ctime);
//            addClass.setMan(man);
//            addClass.setPrice(price);
//            addClass.setHash(hash);
//
//            addClassRepository.save(addClass);
//            tx.commit();
//        } catch (Exception ex) {
//            ex.printStackTrace();
//        } finally {
//            em.close();
//            emf.close();
//        }
//    }


