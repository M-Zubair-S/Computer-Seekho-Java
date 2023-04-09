package com.example.demo;

import java.time.LocalDate;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "album")
public class Album {

    private int albumId;

    private String albumName;

    private String albumDescription;

    private boolean isActive;

    private LocalDate startDate;

    private LocalDate endDate;

    private List<Image> images;

    // Constructor
    public Album() {

    }

    public Album(int albumId, String albumName, String albumDescription, boolean isActive, LocalDate startDate,
            LocalDate endDate, List<Image> images) {
        super();
        this.albumId = albumId;
        this.albumName = albumName;
        this.albumDescription = albumDescription;
        this.isActive = isActive;
        this.startDate = startDate;
        this.endDate = endDate;
        this.images = images;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getAlbumId() {
        return albumId;
    }

    public void setAlbumId(int albumId) {
        this.albumId = albumId;
    }

    public String getAlbumName() {
        return albumName;
    }

    public void setAlbumName(String albumName) {
        this.albumName = albumName;
    }

    public String getAlbumDescription() {
        return albumDescription;
    }

    public void setAlbumDescription(String albumDescription) {
        this.albumDescription = albumDescription;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean isActive) {
        this.isActive = isActive;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    // ****************************************************************************************
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "AlbumImageId", referencedColumnName = "albumId")
    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }
}
