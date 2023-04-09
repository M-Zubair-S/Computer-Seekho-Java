package com.example.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.Image;
@Repository

public interface ImageRepository extends JpaRepository <Image ,Integer>
{
	@Query(nativeQuery=true,value="SELECT * FROM image b WHERE b.album_image_id= :AlbumId")
	List<Image> findallImages(@Param("AlbumId") int albumId);
}
