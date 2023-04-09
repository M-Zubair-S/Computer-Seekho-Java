package com.example.services;

import java.util.List;

import com.example.demo.Album;

public interface AlbumService 
{
	void save(Album ref);
	List<Album> getAll();

}
