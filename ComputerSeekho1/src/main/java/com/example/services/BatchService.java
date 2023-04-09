package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.Batch;
import com.example.demo.Image;

public interface BatchService {
	// ***************************************************************

	void save(Batch ref);

	List<Batch> getAll();

	List<Batch> findByCourseId(int courseId);

}
