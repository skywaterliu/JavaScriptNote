package com.skywater.note.controller;

import com.alibaba.fastjson.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
public class TestMVC {

    @RequestMapping(value = "testMVC",method = RequestMethod.POST)
    public String testMVC(@RequestBody JSONObject jsonObject){
        return "springMVC success "+ jsonObject.getString("message");
    }

}
