package com.example.finalproject.service;

import com.example.finalproject.dao.FrontDAO;
import com.example.finalproject.model.ClassMeta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service("frtsrv")
public class FrontServiceImpl implements FrontService{
    @Autowired
    FrontDAO frtdao;

    @Override
    public List<Object[]> readMain(String category) {

        if(Objects.equals(category, "all") || Objects.equals(category, "null")) {
            return frtdao.selectMain();
        } else {
            return frtdao.selectFilterMain(category);
        }

    }
}
