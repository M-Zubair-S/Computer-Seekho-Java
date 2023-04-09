package com.example.repositories;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer>
{
	@Query(nativeQuery=true,value="SELECT * FROM student b WHERE b.studentbatch_id= :BatchId")
	List<Student> findallstudents(@Param("BatchId") int batchId);

	//List<Student> findallpayment(int studentId);
	
	
}
