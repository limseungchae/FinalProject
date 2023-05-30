package com.example.finalproject.service;

import com.example.finalproject.dao.ClassDAO;
import com.example.finalproject.model.ClassMeta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service("csrv")
public class ClassServiceImpl implements ClassService {
    @Autowired
    private ClassDAO cdao;
    @Override
    public Map<String, Object> listclass(int cpg) {
        return cdao.selectList(cpg-1);
    }

    @Override
    public boolean newClass(ClassMeta classMeta) {
        boolean result = false;
        if(cdao.insertClass(classMeta) > 0) {
            result = true;
        }
        return result;
    }
}
