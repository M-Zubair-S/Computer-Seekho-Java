package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Batch;
import com.example.services.BatchService;

@RestController
public class BatchController {
	@Autowired
	private BatchService service;

	@PostMapping("/api/addBatch")
	public void saveBatch(@RequestBody Batch ref) {
		System.out.println("Add Batches");
		service.save(ref);
	}

	@GetMapping("/api/addBatch")
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	public List<Batch> getAllBatch() {
		return service.getAll();
	}

	// *************************************************
	@GetMapping("/api/Batch/{courseId}")
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	public List<Batch> getBatchesForCourse(@PathVariable int courseId) {
		return service.findByCourseId(courseId);

	}
}
