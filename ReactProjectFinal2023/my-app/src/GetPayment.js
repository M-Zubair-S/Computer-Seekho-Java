import React from 'react';
import { useState, useEffect } from "react";
export function Blogs(props) {
   const [Payment, getPayment] = useState([]);
  useEffect(() => {
      fetch("http://localhost:8080/api/Payments")
         .then(res => res.json())
         .then((result) => { getPayment(result); }
         );
   }, []);
return (
         //  <div>
         //     <h2>All Courses..</h2>
         //     <table>            <thead>
         //           <tr>
         //           <th>CourseName</th>
         //            <th>CourseDescription</th>
         //            <th>courseDuration</th>
         //            <th>courseFees</th>
         //            <th>courseSyllabus</th>
         //            <th>ageGrpType</th>
         //            <th>courseIsActive</th>
         //            <th>coverPhoto</th>
         //           </tr>
         //        </thead>
         //        <tbody>
         //           {Course.map(cour   => (
         //              <tr key={cour.courseId}>
         //                 <td>{cour.courseName}</td>
         //                 <td>{cour.courseDescription}</td>
         //                 <td>{cour.courseDuration}</td>
         //                 <td>{cour.courseFees}</td>
         //                 <td>{cour.courseSyllabus}</td>
         //                 <td>{cour.ageGroupType}</td>
         //                 <td>{cour.courseIsActive}</td>
         //                 <td>{cour.coverPhoto}</td>
         //                 <a href={'/Batch/' + cour.courseId}>Batch</a>
                        
         //              </tr>
                        
         //           ))}
         //        </tbody>         </table>      </div>

         <div>
         <h2>Payment Receipt</h2>
         <table class="table table-striped table-hover">
           <thead class="thead-dark">
             <tr>
               <th>Student Name</th>
               <th>Course Opted</th>
               <th>Course Fees</th>
               <th>Amount Paid</th>
               <th>Balance Amount</th>
                           
             </tr>
           </thead>
           <tbody>
             {Payment.map(pay => (
               <tr key={pay.paymentId}>
                 <td>{pay.courseName}</td>
                 <td>{pay.courseDescription}</td>
                 <td>{pay.courseDuration}</td>
                 <td>{pay.amount}</td>
                 <td>{pay.balance}</td>
                        </tr>
             ))}
           </tbody>
         </table>
       </div>
       
         
       );
    }
    export default Blogs;