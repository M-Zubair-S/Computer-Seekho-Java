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
        {/* <h2 align="center" id="h2dac">Diploma In Advance Computing</h2>
        <h3 align="center" id="h3dac">Faculty Details</h3>
        <table border="2px" align="center">
            <tr>
                <td>Staff Id</td>
                <td>{staff.staffId}</td>
            </tr>
            <tr>
                <td>Staff Name</td>
                <td>{staff.staffName}</td>
            </tr>
            <tr>
                <td>Qualificatio</td>
                <td>{staff.qualification}</td>
            </tr>
            <tr>
                <td>Experience</td>
                <td>{staff.experience}</td>
            </tr>
            <tr>
                <td>Contact</td>
                <td>{staff.contact}</td>
            </tr>
            <tr>
                <td>Staff Image</td>
                <td>{staff.staffImage}</td>
            </tr>
        </table> */}
        <h1>
        PG DAC
        </h1>
        <p> Post Graduate Diploma in Advanced Computing (PG DAC) grooms engineers and IT professionals for a career in Software Development.  Running successfully for more than seventeen years, the PG-DAC course has yielded more than 
            quarter million of students, who are well positioned in the industry today.

</p>
<h1> <strong>Course Modules </strong>

</h1>
    </div>
    )
}
export default Pgdac;