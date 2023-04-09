import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function CoursePost() {

    const [courses, setCourses] = useState({});
   
    let navigate = useNavigate();
  
    useEffect(() => {
        fetch("https://localhost:7235/api/Courses/")
            .then(res => res.json())
            .then((result) => {
                setCourses(result);
            }
            );
    }, []);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCourses(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(courses);
        console.log(JSON.parse(demo));
        fetch("https://localhost:7235/api/Courses/",{
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r.json()) })
        event.preventDefault();
        navigate('/');

        alert(courses);
    }
    return (
        <form onSubmit={handleSubmit}>
           
            <br /><label>courseName :</label>
            <input
                type="text"
                name="courseName"
                value={courses.courseName || ""}
                onChange={handleChange}
            />
            <br /><label>courseDescription:</label>
            <input
                type="text"
                name="courseDescription"
                value={courses.courseDescription || ""}
                onChange={handleChange}
            />
            <br /><label>courseDuration:</label>
            <input
                type="text"
                name="courseDuration"
                value={courses.courseDuration || ""}
                onChange={handleChange}
            />
            <br /> <label>courseFees:</label>
            <input
                type="text"
                name="courseFees"
                value={courses.courseFees || ""}
                onChange={handleChange}
            /> 
            <br /> <label>courseSyllabus :</label>
            <input
                type="text"
                name="courseSyllabus"
                value={ courses.courseSyllabus || ""}
                onChange={handleChange}
            />
              <br /> <label>ageGrpType :</label>
            <input
                type="text"
                name="ageGroupType"
                value={ courses.ageGroupType || ""}
                onChange={handleChange}
            /> 
             
             <br/>
              <label>courseIsActive :</label>
            <input
                type="text"
                name="courseIsActive"
                value={ courses.courseIsActive || ""}
                onChange={handleChange}
            /> 
               <br /> <label>coverPhoto  :</label>
            <input
                type="text"
                name="coverPhoto"
                value={ courses.coverPhoto || ""}
                onChange={handleChange}
            /> 
               <br /> 

             <label>batchId  :</label>
             <input
                type="text"
                name="batch_id"
                value={ courses.batch_id}
                onChange={handleChange}
            />    
             <input type="submit" />
        </form>
    );
}