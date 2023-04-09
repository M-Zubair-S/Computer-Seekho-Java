package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.Staff;


@Repository
@Transactional
public interface StaffRepository extends JpaRepository<Staff,Integer> {
	@Query("from Staff s where s.staff_name=:cat")
	List<Staff> listCat(@Param("cat") String staff_name);
}
