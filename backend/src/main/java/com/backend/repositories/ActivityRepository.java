package com.backend.repositories;

import com.backend.models.Activity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivityRepository extends CrudRepository<Activity,Integer> {
    List<Activity> findByCourseID(@Param("query") String query);
}