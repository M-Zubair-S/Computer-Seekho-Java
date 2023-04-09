import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
export function RegisteredStudents(props) {
   const [Student, setStudent] = useState([]);
   const { code }  = useParams();
  useEffect(() => {
      fetch("http://localhost:8080/api/Student/"+code)
         .then(res => res.json())
         .then((result) => { setStudent(result); }
         );
   }, []);
   console.log(Student);

return (
          <div>
             <h2>Registered Students</h2>
             <table>            <thead>
                   <tr>
                   <th>Name of Student</th>
                    <th>Student Address </th>
                    <th>Student DOB </th>
                  
                      </tr>
                </thead>
                <tbody>
                   {Student.map(cour   => (
                      <tr key={cour.studentId}>
                         <td>{cour.studentName}</td>
                         <td>{cour.studentAddress}</td>
                         <td>{cour.studentDob}</td>
                         <a href={'/Payment/'+cour.studentId }class="btn btn-primary">Confirm Payment</a>
                      </tr>
                        
                   ))}
                </tbody>         </table>      </div>
       );
    }
    export default RegisteredStudents;
    