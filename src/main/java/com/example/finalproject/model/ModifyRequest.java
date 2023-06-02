package com.example.finalproject.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ModifyRequest {
    private String birth;
    private String gender;
    private String phone;
    private String type;
    private String agree;
}
