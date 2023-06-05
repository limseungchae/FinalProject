package com.example.finalproject.model;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ModifyBody {
    private String kakaoid;
    private String birth;
    private String gender;
    private String phone;
    private String userType;
    private String agree;
}