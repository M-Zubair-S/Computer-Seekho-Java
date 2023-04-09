package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Batch;
import com.example.demo.Image;
import com.example.repositories.ImageRepository;

@Service
public class ImageServiceImpl implements ImageService 
{

	@Autowired
	private ImageRepository Crepository;
	@Override
	public void save(Image ref) 
	{
		Crepository.save(ref);
	}
	@Override
    public List<Image> getAll() {
		
		return Crepository.findAll();
	}
	
	public List<Image> findByAlbumId(int albumId)
	{
		return Crepository.findallImages(albumId);
	}
	
}

