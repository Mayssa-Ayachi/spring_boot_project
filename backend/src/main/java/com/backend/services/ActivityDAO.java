package com.backend.services;

import com.backend.models.Activity;
import com.backend.models.Course;
import com.backend.repositories.ActivityRepository;
import com.backend.repositories.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Primary
public class ActivityDAO implements ActivityService
{
    @Autowired
    private ActivityRepository repository;

    @Override
    public Activity save(Activity activity) {
        return repository.save(activity);
    }

    @Override
    public void deleteallactivities() {
        repository.deleteAll();
    }

    @Override
    public List<Activity> findByCourseID(String query) {
        return (List<Activity>) repository.findByCourseID(query);
    }
}
