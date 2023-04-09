package com.example.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Student;
import com.example.repositories.StudentRepository;
@Service
public class StudentServiceImpl implements StudentService
{
	@Autowired
	private StudentRepository Crepository;
	@Override
	public void save(Student ref) 
	{
		Crepository.save(ref);
	}
	@Override
    public List<Student> getAll() {
		
		return Crepository.findAll();
	}
	@Override
	public List<Student> findByBatchId(int batchId)
	{
		return Crepository.findallstudents(batchId);
	}

}
