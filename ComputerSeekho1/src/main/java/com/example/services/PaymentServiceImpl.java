package com.example.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Payment;
import com.example.repositories.PaymentRepository;
import com.example.repositories.StudentRepository;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService 
{
	@Autowired
	private PaymentRepository s_repository;
	@Override
	public void addPayment(Payment ref) 
	{
		s_repository.save(ref);
	}
	@Override
	public List<Payment> getPayment() {
		
		return s_repository.findAll();
	}

	@Override
	public List<Payment> findByStudentId(/*int studentId*/)
	{
		return s_repository.findByStudentId(/*studentId*/);
	}
}
