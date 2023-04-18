package com.backend.services;

import com.backend.models.Activity;

import java.util.List;

public interface ActivityService {
    Activity save(Activity activity);
    void deleteallactivities();
    List<Activity> findByCourseID(String query);

}