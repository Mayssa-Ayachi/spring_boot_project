package com.backend.services;

import com.backend.models.Course;

import java.util.List;

public interface TeacherService {
    Course save(Course course);
    List<Course> findallcourses();
    void deleteallcourses();
    List<Course> findByTeacherID(String query);

}