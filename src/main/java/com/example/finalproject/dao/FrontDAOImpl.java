package com.example.finalproject.dao;

import com.example.finalproject.model.ClassMeta;
import com.example.finalproject.repository.FrontRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("frtdao")
public class FrontDAOImpl implements FrontDAO{
    @Autowired
    FrontRepository frontRepository;

    @Override
    public List<Object[]> selectMain() {
        return frontRepository.findMainAll();
    }

    @Override
    public List<Object[]> selectFilterMain(String ctg) {

        return frontRepository.findFilteredMain(ctg);
    }
}
