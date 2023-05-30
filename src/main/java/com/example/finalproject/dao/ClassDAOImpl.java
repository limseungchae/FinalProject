package com.example.finalproject.dao;

import com.example.finalproject.model.ClassMeta;
import com.example.finalproject.repository.ClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import java.util.HashMap;
import org.springframework.data.domain.Sort;
import java.util.Map;

@Repository("cdao")
public class ClassDAOImpl implements ClassDAO {
    @Autowired
    ClassRepository classRepository;
    @Override
    public Map<String, Object> selectList(int cpg) {
        Pageable paging = PageRequest.of(cpg,25, Sort.by("cno").descending());

        Map<String, Object> tcls = new HashMap<>();
        tcls.put("cl",classRepository.findAll(paging).getContent());
        tcls.put("cntpg",classRepository.findAll(paging).getTotalPages());

        return tcls;
    }

    @Override
    public int insertClass(ClassMeta classMeta) {
        return Math.toIntExact(classRepository.save(classMeta).getCno());
    }
}
