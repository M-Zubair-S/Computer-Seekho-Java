package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Album;
import com.example.repositories.AlbumRepository;

@Service
public class AlbumServiceImpl implements AlbumService
{
	@Autowired
	private AlbumRepository Crepository;
	@Override
	public void save(Album ref) 
	{
		Crepository.save(ref);
	}
	@Override
    public List<Album> getAll() {
		
		return Crepository.findAll();
	}
}
