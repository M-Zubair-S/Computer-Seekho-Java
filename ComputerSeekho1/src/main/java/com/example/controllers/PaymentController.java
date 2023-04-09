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
import com.example.demo.Payment;
import com.example.services.PaymentService;

@RestController
public class PaymentController {


	@Autowired
	PaymentService service;
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping(value="/api/Payments")
	public List<Payment> showPayment()
	{
		return service.getPayment();
	}
	
	@PostMapping(value="/api/Payments")
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	public void addEnq(@RequestBody Payment payment)
	{
		System.out.println("payment Added");
		service.addPayment(payment);;
		
	}
	@GetMapping("/api/Payment")
	@CrossOrigin(origins="*",allowedHeaders = "*")
    public List<Payment> getPaymentForStudent(/*@PathVariable int studentId*/) {
        return service.findByStudentId(/*studentId*/);
	
	}
	
}
