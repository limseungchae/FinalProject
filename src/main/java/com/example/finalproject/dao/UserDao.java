package com.example.finalproject.dao;

import com.example.finalproject.model.User;

public interface UserDao {
    int insertUser(User user);

    User selectUser(long id);
}
