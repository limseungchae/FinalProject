package com.example.finalproject;

import com.example.finalproject.model.ClassMeta;
import com.example.finalproject.model.User;
import com.example.finalproject.repository.FrontRepository;
import com.example.finalproject.repository.UserRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class FrontTest {
    @Autowired
    FrontRepository frontRepository;

    @Autowired
    UserRepository userRepository;

    public String kId = "2813856259";


    @Test
    @DisplayName("all")
    public void findAll() {
        List<ClassMeta> cms = frontRepository.findAll();

        for(ClassMeta cm: cms)
            System.out.println(cm);
    }

    @Test
    @DisplayName("all")
    public void findMain() {
        List<Object[]> cms = frontRepository.findMainAll();

        for(Object[] cm: cms)
            System.out.println(cm);
    }

    @Test
    @DisplayName("like")
    public void findlike() {
        List<Object[]> lks = frontRepository.findLikeyByUserid(kId);

        for(Object[] lk: lks)
            System.out.println(lk);
    }

//    @Test
//    @DisplayName("test")
//    public void chk() {
//        User chk = userRepository.findUserByKakaoid("2813856259");
//
//        System.out.println(chk);
//    }


}
