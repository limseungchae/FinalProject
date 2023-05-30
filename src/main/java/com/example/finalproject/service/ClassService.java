package com.example.finalproject.service;

import com.example.finalproject.model.ClassMeta;

import java.util.Map;

public interface ClassService {
    Map<String,Object>listclass(int cpg);

    boolean newClass(ClassMeta classMeta);
}
