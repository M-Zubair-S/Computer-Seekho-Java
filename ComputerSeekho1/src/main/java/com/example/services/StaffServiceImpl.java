package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.Staff;
import com.example.repositories.StaffRepository;

@Service
public class StaffServiceImpl implements StaffService 
{
	@Autowired
	private StaffRepository srepository;
	
	@Override
	public void addStaff(Staff s)
	{
	srepository.save(s);
	}
	
	@Override
	public List<Staff> getStaff()
	{
		return srepository.findAll();
	}
	@Override
	public List<Staff> getSelected(String cat) {
		// TODO Auto-generated method stub
		return srepository.listCat(cat);
	}
}
