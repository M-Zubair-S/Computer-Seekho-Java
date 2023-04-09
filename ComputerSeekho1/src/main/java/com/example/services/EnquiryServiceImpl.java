package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Enquiry;
import com.example.repositories.EnquiryRepository;
@Service
public class EnquiryServiceImpl implements EnquiryService
{
	@Autowired
	EnquiryRepository repository;
	
	@Override
	public void addEnquiry(Enquiry e)
	{
	repository.save(e);
	}
	
	@Override
	public List<Enquiry> getEnquiries()
	{
		return repository.findAll();
	}

	
	
	@Override
	public List<Object> getEnquiry(int staff_id) {
		// TODO Auto-generated method stub
		return repository.getEnquiryAndStaffDetailsByStaffId(staff_id);
	}
	
	
}
