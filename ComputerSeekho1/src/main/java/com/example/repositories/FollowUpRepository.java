package com.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.FollowUp;


@Repository
@Transactional
public interface FollowUpRepository extends JpaRepository<FollowUp,Integer>{

}
