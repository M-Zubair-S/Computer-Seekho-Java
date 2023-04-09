package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.example.demo.Enquiry;
import com.example.demo.Staff;

@Repository
@Transactional
public interface EnquiryRepository extends JpaRepository<Enquiry,Integer> 
{
	 @Query(nativeQuery=true,value="SELECT e.enquirer_name,e.enquirer_query,e.enquiry_date, s.staff_name,e.follow_up_date FROM Enquiry e JOIN Staff s ON e. enquiry_staff_id = s.staff_id WHERE e. enquiry_staff_id= :StaffId")
	  List<Object> getEnquiryAndStaffDetailsByStaffId(@Param("StaffId") int staff_id);

	//List<Object[]> getEnquiryAndStaffDetailsByStaffId(int staffId);


	/*@Query("SELECT s, e FROM Staff s JOIN s.Enquiry s WHERE s.staff_id = :staffId")
    List<Object[]> findEnquiriesByStaffId(int staffId);*/
	
	
}