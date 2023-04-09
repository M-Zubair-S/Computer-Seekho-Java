package com.example.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.Courses;

public interface CourseService {
	void save(Courses ref);

	List<Courses> getAll();

}
