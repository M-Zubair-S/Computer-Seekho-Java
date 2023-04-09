package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Batch;
import com.example.demo.Image;
import com.example.services.ImageService;
@RestController
public class ImageController
{
	@Autowired
	private ImageService service;
	@CrossOrigin(origins="*",allowedHeaders = "*")
	@PostMapping("/api/addImage")
	public void saveImage(@RequestBody Image ref)
	{
		service.save(ref);
	}
	@CrossOrigin(origins="*",allowedHeaders = "*")
	@GetMapping("/api/addImage")
	
	public List<Image> getAllImage()
	{
		return service.getAll();
	}
	@GetMapping("/api/Image/{albumId}")
	@CrossOrigin(origins="*",allowedHeaders = "*")
    public List<Image> getImagesForAlbum(@PathVariable int albumId) {
        return service.findByAlbumId(albumId);
	
	}
}
