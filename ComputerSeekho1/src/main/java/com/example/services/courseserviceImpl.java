package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Courses;
import com.example.repositories.CourseRepository;

@Service
public class courseserviceImpl implements CourseService {
	@Autowired
	private CourseRepository Crepository;

	@Override
	public void save(Courses ref) {
		Crepository.save(ref);
	}

	@Override
	public List<Courses> getAll() {
		return Crepository.findAll();
	}

}
