package com.example.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.Album;
import com.example.demo.Batch;
import com.example.demo.Image;

@Repository
@Transactional
public interface AlbumRepository extends  JpaRepository<Album, Integer>
{
	
}
