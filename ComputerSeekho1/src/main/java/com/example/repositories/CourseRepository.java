package com.example.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.example.demo.Courses;

@Repository
public interface CourseRepository extends JpaRepository<Courses, Integer> {

}
