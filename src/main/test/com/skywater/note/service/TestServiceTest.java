package com.skywater.note.service;

import junit.framework.TestCase;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:spring/applicationContext.xml"})
public class TestServiceTest extends TestCase {
    @Autowired
    private TestService testService;

    @Test
    public void testTestSpring() throws Exception {
        System.out.println(testService.testSpring());
    }

}