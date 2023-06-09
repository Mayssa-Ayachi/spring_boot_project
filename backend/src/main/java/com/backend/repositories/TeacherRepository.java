package com.backend.repositories;

import com.backend.models.Course;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeacherRepository extends CrudRepository<Course,Integer> {
    List<Course> findByTeacherID(@Param("query") String query);
}