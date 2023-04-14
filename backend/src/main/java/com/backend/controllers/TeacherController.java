package com.backend.controllers;


import com.backend.models.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.backend.services.TeacherService;


import java.util.List;

@RestController
@RequestMapping("/api/teacher")
public class TeacherController
{
    private final TeacherService service;

    @Autowired
    public TeacherController(TeacherService service) {
        this.service = service;
    }

    @PostMapping
    public Course save (@RequestBody Course course)
    {
        return service.save(course);
    }

    @GetMapping
    public List<Course> findallcourses(){
        return service.findallcourses();
    }
}
