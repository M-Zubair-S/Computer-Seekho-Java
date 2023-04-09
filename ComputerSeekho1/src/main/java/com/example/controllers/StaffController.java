package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.Staff;
import com.example.services.StaffService;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class StaffController {

	@Autowired 
	private StaffService sservice;
	
	@GetMapping(value="/api/Staffs")
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	public List<Staff> showStaff()
	{
		return sservice.getStaff();
	}
	@PostMapping(value="/api/Staffs")
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	public void addEnq(@RequestBody Staff staff)
	{
		System.out.println("staff Added");
		sservice.addStaff(staff);
		
	}
	 @GetMapping(value = "/api/Staffs/{cat}")
	 public List<Staff> getProCat(@PathVariable String cat)
	 {
		return sservice.getSelected(cat);
	 }
	
}
