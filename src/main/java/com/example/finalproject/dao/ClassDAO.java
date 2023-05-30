package com.example.finalproject.dao;

import com.example.finalproject.model.ClassMeta;

import java.util.Map;

public interface ClassDAO {
    Map<String, Object> selectList(int cpg);

    int insertClass(ClassMeta classMeta);
}
