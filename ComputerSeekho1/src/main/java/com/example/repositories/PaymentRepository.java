package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.Payment;
import com.example.demo.Staff;

@Repository
public interface PaymentRepository extends JpaRepository<Payment,Integer> { 

		
	//@Query(value="SELECT * FROM Payment b WHERE b.student_payment_id= :StudentId " , nativeQuery=true)
	@Query(value="SELECT p.StudentPayment.student_name, p.CoursePayment.course_name, p.CoursePayment.course_fees FROM Payment p JOIN p.StudentPayment c JOIN p.CoursePayment ",nativeQuery=true)
	List<Payment> findByStudentId();

	
	
	
}
