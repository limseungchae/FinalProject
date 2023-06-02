package com.example.finalproject.dao;

import com.example.finalproject.model.User;
import com.example.finalproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository("usdao")
public class UserDAOImpl implements UserDAO {
    @Autowired
    private UserRepository userRepository;

    @Override
    public User insertUser(User user) {
        System.out.println("테이블에 저장하기위해 UserService 에서 받아온 유저 정보입니다 ... => " + user);
        return userRepository.save(user);
    }

    @Override
    public User selectUser(Long id) {
        System.out.println("회원테이블에 이미 등록된 유저라면 오른쪽에 해당 데이터가 출력된다 .... => "
                + userRepository.findByKakaoid(id));
        return userRepository.findByKakaoid(id);
    }
}