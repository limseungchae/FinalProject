package com.example.finalproject.service;

import com.example.finalproject.model.ModifyBody;
import com.example.finalproject.model.User;

public interface UserService {

    User joinOrAuthenticate(String token);

    User readUser(String mbno);

}