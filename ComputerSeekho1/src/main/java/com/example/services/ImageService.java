package com.example.services;

import java.util.List;

import com.example.demo.Batch;
import com.example.demo.Image;


public interface ImageService {
	void save(Image ref);
	List<Image> getAll();
	List<Image> findByAlbumId(int albumId);
	
}
