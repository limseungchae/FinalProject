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

    @Override
    public List<Object[]> selectSidoMain(String sido) {
        return frontRepository.findSidoMain(sido);
    }

    @Override
    public List<Object[]> selectFilterSidoMain(String ctg, String sido) {
        return frontRepository.findFilterSidoMain(ctg, sido);
    }

    @Override
    public List<Object[]> selectSearch(String search) {
        String param = "%" + search + "%";

        return frontRepository.findClassLikeBySearch(param);
    }
}
