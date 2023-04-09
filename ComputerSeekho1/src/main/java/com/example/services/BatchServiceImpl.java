package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Batch;
import com.example.repositories.BatchRepository;

@Service
public class BatchServiceImpl implements BatchService {
	@Autowired
	private BatchRepository Crepository;

	@Override
	public void save(Batch ref) {
		Crepository.save(ref);
	}

	@Override
	public List<Batch> getAll() {

		return Crepository.findAll();
	}

	public List<Batch> findByCourseId(int courseId) {
		return Crepository.findallbatches(courseId);
	}

}
