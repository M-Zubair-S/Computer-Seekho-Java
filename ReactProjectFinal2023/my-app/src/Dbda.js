import React from "react";
import  {  useState, useEffect } from "react";

function Pgdac(props){
    const [staff,setStaff] = useState([]);
    useEffect(() => {
        fetch("http://")
        .then(res => res.json())
        .then((result)  => { setStaff(result); }
        );
    });
    return(
        
      <div> 
        
        <h1> 
        PG DBDA 
        </h1> 
        <p> Post Graduate Diploma in Big Data Analytics enables students to explore the fundamental  
            concepts of big data analytics. The theoretical and practical mix of PG-DBDA helps develop in-depth knowledge and understanding of the big data analytic domain. 
 
 
 
</p> 
<h1> <strong>Course Modules </strong> 
 
</h1> 
<p> For latest updates in course content, please visit www.cdac.in</p> 
    </div> 
    )
}
export default Pgdac;