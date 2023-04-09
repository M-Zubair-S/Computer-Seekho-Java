package com.example.controllers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Enquiry;
import com.example.demo.Staff;
import com.example.services.EnquiryService;


@RestController
public class EnquiryController {

	@Autowired
	EnquiryService service;
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping(value="/api/Enquiries")
	public List<Enquiry> showEnquiries()
	{
		return service.getEnquiries();
	}
	
	@PostMapping(value="/api/Enquiries/")
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	public void addEnq(@RequestBody Enquiry enquiry)
	{
		System.out.println("enquiry Added");
		service.addEnquiry(enquiry);
		
	}
	/*@GetMapping("/api/Enquiries/{staff_id}")
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	 public List<Object> getEnquiryt(@PathVariable int staff_id)
	 {
		return service.getEnquiry(staff_id);
	 }*/
	
	/*@GetMapping("/api/Enquiries/{staff_id}")
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	public Map<String, Object> getEnquiry(@PathVariable int staff_id) {
	    List<Object> enquiryList = service.getEnquiry(staff_id);
	    Map<String, Object> enquiryMap = new HashMap<>();
	    enquiryMap.put("enquiries", enquiryList);
	    return enquiryMap;
	}*/
//	@GetMapping("/api/Enquiries/{staff_id}")
//	@CrossOrigin(origins = "*", allowedHeaders = "*")
//	public Map<String, Object> getEnquiryt(@PathVariable int staff_id) {
//	    List<Object> enquiryList = service.getEnquiry(staff_id);
//	    if (enquiryList.isEmpty()) {
//	        return Collections.emptyMap();
//	    }
//	    Object[] enquiry = (Object[]) enquiryList.get(0);
//	    Map<String, Object> enquiryMap = new HashMap<>();
//	    enquiryMap.put("enquirer_name", enquiry[0]);
//	    enquiryMap.put("enquirer_query", enquiry[1]);
//	    enquiryMap.put("enquiry_date", enquiry[2]);
//	    enquiryMap.put("staff_name", enquiry[3]);
//	    enquiryMap.put("follow_up_date", enquiry[4]);
//	    return enquiryMap;
//	}
//	
	
	@GetMapping("/api/Enquiries/{staff_id}")
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	public List<Map<String, Object>> getEnquiryt(@PathVariable int staff_id) {
	    List<Object> enquiryData = service.getEnquiry(staff_id);
	    List<Map<String, Object>> enquiryList = new ArrayList<>();
	    for (Object enquiry : enquiryData) {
	        String enquirerName = (String) ((Object[]) enquiry)[0];
	        String enquiryQuery = (String) ((Object[]) enquiry)[1];
	        Date enquiryDate = (Date) ((Object[]) enquiry)[2];
	        String staffName = (String) ((Object[]) enquiry)[3];
	        Date followUpDate = (Date) ((Object[]) enquiry)[4];

	        Map<String, Object> enquiryMap = new HashMap<>();
	        enquiryMap.put("enquirer_name", enquirerName);
	        enquiryMap.put("enquiry_date", enquiryDate);
	        enquiryMap.put("enquirer_query", enquiryQuery);
	        enquiryMap.put("follow_up_date", followUpDate);
	        enquiryMap.put("staff_name", staffName);
	        enquiryList.add(enquiryMap);
	    }
	    return enquiryList;
	}
}
