package com.example.demo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "image")
public class Image {
    private int imageId;
    private int AlbumImageId;
    private boolean isActive;
    private String imagepath;

    private boolean isAlbumCover;

    // ****************************************************
    public Image() {

    }

    // ***************************************************************************************
    public Image(int imageId, int AlbumImageId, boolean isActive, boolean isAlbumCover, String imagepath) {
        super();
        this.imageId = imageId;
        this.isActive = isActive;
        this.isAlbumCover = isAlbumCover;
        this.AlbumImageId = AlbumImageId;
        this.imagepath = imagepath;
    }

    public String getImagepath() {
        return imagepath;
    }

    public void setImagepath(String imagepath) {
        this.imagepath = imagepath;
    }

    // *************************************************************************************
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_id")
    public int getImageId() {
        return imageId;
    }

    public void setImageId(int imageId) {
        this.imageId = imageId;
    }

    public int getAlbumImageId() {
        return AlbumImageId;
    }

    public void setAlbumImageId(int albumImageId) {
        AlbumImageId = albumImageId;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean isActive) {
        this.isActive = isActive;
    }

    public boolean isAlbumCover() {
        return isAlbumCover;
    }

    public void setAlbumCover(boolean isAlbumCover) {
        this.isAlbumCover = isAlbumCover;
    }
}
