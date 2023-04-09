import React from 'react';
import { useState, useEffect } from "react";
export function Blogs(props) {
   const [Course, setCourses] = useState([]);
  useEffect(() => {
      fetch("https://localhost:7235/api/Followups/")
         .then(res => res.json())
         .then((result) => { setCourses(result); }
         );
   }, []);
return (
          <div>
             <h2>Followups All Detail</h2>
             <table>            <thead>
                   <tr>
                   <th>EnquirerName</th>
                    <th>EnquirerQuery</th>
                    <th>Enquiry Date</th>
                    <th>StaffName</th>
                    <th>FollowupDate</th>
                    </tr>
                </thead>
                <tbody>
                   {Course.map(cour   => (
                      <tr key={cour.staff_id}>
                         <td>{cour.enquirer_name}</td>
                         <td>{cour.enquirer_query}</td>
                         <td>{cour.enquiry_date}</td>
                         <td>{cour.staff_name}</td>
                         <td>{cour.follow_up_date}</td>
                        
                      </tr>
                        
                   ))}
                </tbody>         </table>      </div>
       );
    }
    export default Blogs;
    