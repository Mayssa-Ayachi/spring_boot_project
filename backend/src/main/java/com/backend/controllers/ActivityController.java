package com.backend.controllers;


import com.backend.models.Activity;
import com.backend.models.Course;
import com.backend.services.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.backend.services.TeacherService;


import java.util.List;

@RestController
@RequestMapping("/api/activity")
public class ActivityController
{
    private final ActivityService service;

    @Autowired
    public ActivityController(ActivityService service) {
        this.service = service;
    }

    @PostMapping("/save")
    public Activity save (@RequestBody Activity activity)
    {
        return service.save(activity);
    }

    @GetMapping("/{query}")
    public List<Activity> findByCourseID(@PathVariable("query") String query){
        return service.findByCourseID(query);
    }

    @DeleteMapping("delete")
    public void deleteallactivities(){
        service.deleteallactivities();
    }
}
