package com.cpc.backend.repositories;

import com.cpc.backend.models.Course;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherRepository extends CrudRepository<Course,Integer> {

}