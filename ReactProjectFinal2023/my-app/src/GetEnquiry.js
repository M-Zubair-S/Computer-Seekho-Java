import React from 'react';
import { useState, useEffect } from "react";
export function Blogs(props) {
   const [Enquiry, setEnquiry] = useState([]);
  useEffect(() => {
      fetch("http://localhost:8080/api/Staffs")
         .then(res => res.json())
         .then((result) => { setEnquiry(result); }
         );
   }, []);
   console.log(Enquiry);

return (
          <div>
             <h2>All Enquiries</h2>
             <table>            <thead>
                   <tr>
                   <th>Name of Student</th>
                    <th>Course Name </th>
                   
                      </tr>
                </thead>
                <tbody>
                   {Enquiry.map(cour   => (
                      <tr key={cour.enquiry_id}>
                         <td>{cour.enquirer_name}</td>
                         <td>{cour.courseName}</td>
                         
                         <a href={'/Student/'+cour.enquiry_id }>ADMIT</a>
                      </tr>
                        
                   ))}
                </tbody>         </table>      </div>
       );
    }
    export default Blogs;
    