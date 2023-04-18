package com.backend.models;

import jakarta.persistence.*;

@Entity
@Table(	name = "activity")

public class Activity {
    public Activity(Integer id, String teacherID, String name, String URL, String description) {
        this.id = id;
        this.courseID = courseID;
        this.name = name;
        this.URL = URL;
        this.description = description;
    }

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
    private String courseID;
    private String name;
    private String URL;
    private String description;

    public void setType(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }

    private String type;

    public Activity() {
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setCourseID(String courseID) {
        this.courseID = courseID;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setURL(String URL) {
        this.URL = URL;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getId() {
        return id;
    }

    public String getCourseID() {
        return courseID;
    }

    public String getName() {
        return name;
    }

    public String getURL() {
        return URL;
    }

    public String getDescription() {
        return description;
    }
}
