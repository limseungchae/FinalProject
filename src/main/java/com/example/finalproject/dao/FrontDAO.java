package com.example.finalproject.dao;


import com.example.finalproject.model.ClassMeta;

import java.util.List;

public interface FrontDAO {
    List<Object[]> selectMain();

    List<Object[]> selectFilterMain(String ctg);
}
