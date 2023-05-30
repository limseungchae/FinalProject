package com.example.finalproject.repository;

import com.example.finalproject.model.ClassMeta;
import org.springframework.data.domain.Page;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.awt.print.Pageable;

public interface ClassRepository extends PagingAndSortingRepository<ClassMeta,Long> {

    Page findAll(Pageable paging);
}
