package com.example.services;

import java.util.List;

import com.example.demo.Student;

public interface StudentService
{
	void save(Student ref);
	List<Student> getAll();
	List<Student> findByBatchId(int batchId);
}
