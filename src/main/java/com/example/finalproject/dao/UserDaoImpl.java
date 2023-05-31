package com.example.finalproject.dao;

import com.example.finalproject.model.User;
import com.example.finalproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository("urdao")
public class UserDaoImpl implements UserDao{
    @Autowired
    private UserRepository userRepository;

    @Override
    public int insertUser(User user) {
        System.out.println(user);
        int result = 0;
        User user1 = null;
        user1 = userRepository.save(user);

        if(user1 != null) result = 1;
        return result;
    }
}
