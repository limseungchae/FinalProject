package com.example.finalproject.dao;

import com.example.finalproject.model.User;

public interface UserDAO {
    User insertUser(User user);
    User selectUser(Long id);
}
