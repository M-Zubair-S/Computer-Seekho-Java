package com.example.services;

import java.util.List;

import com.example.demo.Enquiry;

public interface EnquiryService
{
	void addEnquiry(Enquiry e);
	List<Enquiry> getEnquiries();
	List<Object> getEnquiry(int staff_id);
}
