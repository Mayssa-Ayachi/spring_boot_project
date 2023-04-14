package com.backend.models;

import jakarta.persistence.*;

@Entity
@Table(	name = "course")

public class Course {
    public Course(Integer id, String teacherID, String name, String URL, String description) {
        this.id = id;
        this.teacherID = teacherID;
        this.name = name;
        this.URL = URL;
        this.description = description;
    }

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
    private String teacherID;
    private String name;
    private String URL;
    private String description;

    public Course() {
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public String getTeacherID() {
        return teacherID;
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

    public void setTeacherID(String teacherID) {
        this.teacherID = teacherID;
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
}
