import React from 'react';
import { useState, useEffect } from "react";


 function Blogs(props) {
   const [Course, setCourses] = useState([]);

  useEffect(() => {
      fetch("http://localhost:8080/api/Enquiries/1")
         .then(res => res.json())
         .then((result) => { setCourses(result);
            //console.log(Course);
          }
         );
   }, []);

   console.log(Course);


   
return (
         //  <div>
         //     <h2>Followups All Detail</h2>
         //     <table>            <thead>
         //           <tr>
         //           <th>EnquirerName</th>
         //            <th>EnquirerQuery</th>
         //            <th>Enquiry Date</th>
         //            <th>StaffName</th>
         //            <th>FollowupDate</th>
         //            </tr>
         //        </thead>
         //        <tbody>
         //           { Course.map(cour   => ( 
         //              <tr key={cour.enquiry_id}>
         //                 <td>{cour.enquirer_name}</td>
         //                 <td>{cour.enquirer_query}</td>
         //                 <td>{cour.enquiry_date}</td>
         //                 <td>{cour.staff_name}</td>
         //                 <td>{cour.follow_up_date}</td>                        
         //              </tr>
                        
         //            ))} 
         //        </tbody>         </table>      </div>
         <div class="container">
  <h2>Followups All Detail</h2>
  <table class="table table-striped table-hover">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Enquirer Name</th>
        <th scope="col">Enquirer Query</th>
        <th scope="col">Enquiry Date</th>
        <th scope="col">Staff Name</th>
        <th scope="col">Follow-up Date</th>
      </tr>
    </thead>
    <tbody>
      { Course.map(cour   => ( 
        <tr key={cour.enquiry_id}>
          <td>{cour.enquirer_name}</td>
          <td>{cour.enquirer_query}</td>
          <td>{cour.enquiry_date}</td>
          <td>{cour.staff_name}</td>
          <td>{cour.follow_up_date}</td>                        
        </tr>                        
      ))}
    </tbody>
  </table>
</div>

       );
    }
    export default Blogs;
    