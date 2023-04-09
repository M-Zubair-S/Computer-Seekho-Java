// import React from 'react';
// import { useState, useEffect } from "react";
// export function Blogs(props) {
//    const [Course, setCourses] = useState([]);
//   useEffect(() => {
//       fetch("https://localhost:7235/api/Courses/")
//          .then(res => res.json())
//          .then((result) => { setCourses(result); }
//          );
//    }, []);
// return (
//           <div>
//              <h2>Employees Data...</h2>
//              <table>            <thead>
//                    <tr>
//                    <th>CourseName</th>
//                     <th>CourseDescription</th>
//                     <th>courseDuration</th>
//                     <th>courseFees</th>
//                     <th>courseSyllabus</th>
//                     <th>ageGrpType</th>
//                     <th>courseIsActive</th>
//                     <th>coverPhoto</th>
//                    </tr>
//                 </thead>
//                 <tbody>
//                    {Course.map(cour   => (
//                       <tr key={cour.courseId}>
//                          <td>{cour.courseName}</td>
//                          <td>{cour.courseDescription}</td>
//                          <td>{cour.courseDuration}</td>
//                          <td>{cour.courseFees}</td>
//                          <td>{cour.courseSyllabus}</td>
//                          <td>{cour.ageGroupType}</td>
//                          <td>{cour.courseIsActive}</td>
//                          <td>{cour.coverPhoto}</td>
//                          <a href={'/Batch/' + cour.courseId}>Batch</a>
                        
//                       </tr>
                        
//                    ))}
//                 </tbody>         </table>      </div>
//        );
//     }
//     export default Blogs;
    
import React from 'react';
import { useState, useEffect } from "react";
export function Blogs(props) {
   const [Course, setCourses] = useState([]);
  useEffect(() => {
      fetch("http://localhost:8080/api/addCourse")
         .then(res => res.json())
         .then((result) => { setCourses(result); }
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
         <h2>All Courses</h2>
         <table class="table table-striped table-hover">
           <thead class="thead-dark">
             <tr>
               <th>CourseName</th>
               <th>CourseDescription</th>
               <th>courseDuration</th>
               <th>courseFees</th>
               <th>courseSyllabus</th>
               <th>ageGrpType</th>
               <th>courseIsActive</th>
               <th>Cover Photo</th>
              
             </tr>
           </thead>
           <tbody>
             {Course.map(cour => (
               <tr key={cour.courseId}>
                 <td>{cour.courseName}</td>
                 <td>{cour.courseDescription}</td>
                 <td>{cour.courseDuration}</td>
                 <td>{cour.courseFees}</td>
                 <td>{cour.courseSyllabus}</td>
                 <td>{cour.ageGroupType}</td>
                 <td>{cour.courseIsActive}</td>
                 <td>{cour.coverPhoto}</td>
                 <td><a href={'/Batch/' + cour.courseId} class="btn btn-primary">View Batch</a></td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
       
         
       );
    }
    export default Blogs;
    