package com.cpc.backend.services;

import com.cpc.backend.models.Course;

import java.util.List;

public interface TeacherService {
    Course save(Course course);
    List<Course> findallcourses();

}