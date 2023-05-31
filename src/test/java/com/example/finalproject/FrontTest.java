package com.example.finalproject;

import com.example.finalproject.model.ClassMeta;
import com.example.finalproject.repository.FrontRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class FrontTest {
    @Autowired
    FrontRepository frontRepository;


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
        List<Object[]> lks = frontRepository.findLikeyByUserid();

        for(Object[] lk: lks)
            System.out.println(lk);
    }



}
