package com.example.services;

import java.util.List;


import com.example.demo.Staff;

public interface StaffService {
	void addStaff(Staff s);
	List<Staff> getStaff();
	List<Staff> getSelected(String cat);
}
