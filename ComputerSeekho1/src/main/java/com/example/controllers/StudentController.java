package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Student;
import com.example.services.StudentService;


@RestController
public class StudentController
{
	@Autowired
	private StudentService service;
	
	@PostMapping("/api/addStudent")
	@CrossOrigin(origins="*",allowedHeaders = "*")
	public void saveStudent(@RequestBody Student ref)
	{
		service.save(ref);
	}
	
	@GetMapping("/api/addStudent")
	@CrossOrigin(origins="*",allowedHeaders = "*")
	public List<Student> getAllBatch()
	{
		return service.getAll();
	}
	//*****************************************************************
	@GetMapping("/api/Student/{batchId}")
	@CrossOrigin(origins="*",allowedHeaders = "*")
    public List<Student> getstudentsForBatches(@PathVariable int batchId) {
        return service.findByBatchId(batchId);
	}
        
        
        
}
