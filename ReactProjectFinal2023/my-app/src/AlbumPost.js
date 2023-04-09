import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function PostCourses() {

    const [album, setAlbum] = useState({});
   
    let navigate = useNavigate();
    useEffect(() => {
        fetch("https://localhost:7235/api/Albums/")
            .then(res => res.json())
            .then((result) => {
                setAlbum(result);
            }
            );
    }, []);
  
        const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setAlbum(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(album);
        console.log(JSON.parse(demo));
        fetch("https://localhost:7235/api/Albums/",{
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r.json()) })
        event.preventDefault();
        navigate('/');

        alert(album);
    }
    return (
        <form onSubmit={handleSubmit}>
           
            <br /><label>albumName :</label>
            <input
                type="text"
                name="album_name"
                value={album.album_name || ""}
                onChange={handleChange}
            />
            <br /><label>albumDescription:</label>
            <input
                type="text"
                name="album_description"
                value={album.album_description || ""}
                onChange={handleChange}
            />
            <br /><label>albumisActive</label>
            <input
                type="text"
                name="album_isActive"
                value={album.album_isActive || ""}
                onChange={handleChange}
            />
            <br /> <label>album_createdAt</label>
            <input
                type="text"
                name="album_createdAt"
                value={album.album_createdAt || ""}
                onChange={handleChange}
            /> 
            <br /> <label>album_endAt :</label>
            <input
                type="text"
                name="album_endAt"
                value={album.album_endAt || ""}
                onChange={handleChange}
            />
             
             <input type="submit" />
        </form>
    );
}