package com.example.services;

import java.util.List;


import com.example.demo.Payment;

public interface PaymentService {
	public void addPayment(Payment p);
	public List<Payment> getPayment();
public List<Payment> findByStudentId(/*int studentId*/);
}
