package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Album;
import com.example.services.AlbumService;

@RestController
public class AlbumController 
{
	@Autowired
	private AlbumService service;
	
	@PostMapping("/api/addAlbum")
	@CrossOrigin(origins="*",allowedHeaders = "*")
	public void saveBatch(@RequestBody Album ref)
	{
		service.save(ref);
	}
	
	@GetMapping("/api/addAlbum")
	@CrossOrigin(origins="*",allowedHeaders = "*")
	public List<Album> getAllAlbum()
	{
		return service.getAll();
	}
}
