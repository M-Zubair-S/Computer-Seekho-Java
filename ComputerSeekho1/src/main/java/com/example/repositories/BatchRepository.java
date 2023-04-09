package com.example.repositories;

import java.util.List;
import java.util.Optional;

import javax.persistence.NamedQuery;
import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.lang.String;
import com.example.demo.Batch;

@Repository
@Transactional
public interface BatchRepository extends JpaRepository<Batch, Integer> {
	@Query(nativeQuery = true, value = "SELECT * FROM Batch b WHERE b.course_batch_id= :CourseId")
	List<Batch> findallbatches(@Param("CourseId") int courseId);

}
