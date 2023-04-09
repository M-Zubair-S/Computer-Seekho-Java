// import React from 'react';import { useState, useEffect, } from "react";
// import { useParams } from 'react-router-dom';
// import './Course.css';
// export default function Batch(props) {
//     const [batches, setCourses] = useState({});
//     const { code }  = useParams();
//     useEffect(() => {
//         fetch("https://localhost:7235/api/Batches/"+code)
//             .then(res => res.json())
//             .then((result) => { setCourses(result); }
            
//             );
//     }, []);
//     console.log(batches);
// //     JSON.stringify(batches);
// //      return (
       
// //          <div><h2>Batches Schedule</h2>
// //              <table border={5}>            <thead>
// //                  <tr>
                   
// //                      <th>BatchName</th>
// //                      <th>BatchStartTime</th>
// //                      <th>BatchEndTime</th>
// //                      <th>BatchisActive</th>
// //                      <th>FinalPresentationDate</th>
// //                            </tr>
// //              </thead>
// //                  <tbody>
// //                             {batches.map(batch=>(
// //                                  <tr>
// //                              <td>{batch.batch_name}</td>
// //                              <td>{batch.batch_Start_time}</td>
// //                              <td>{batch.batch_End_time}</td>
// //                              <td>{batch.batch_isActive}</td>
// //                              <td>{batch.final_presentation_date}</td>
// //                             </tr>

// //  ))}
                   
// //                  </tbody>      
                
// //                 </table>  
               
// //                 </div>
// //      );
 
// }

import React from 'react';
import { useState, useEffect, } from "react";
import { useParams } from 'react-router-dom';
import './Course.css';
export default function Batch(props) {
    const [batches, setCourses] = useState([]);
   // const { code }  = useParams();
    useEffect(() => {
        fetch("http://localhost:8080/api/addBatch")
            .then(res => res.json())
            .then((result) => { setCourses(result); }
            
            );
    }, []);
    console.log(batches);
     JSON.stringify(batches);
      return (
       
          <div><h2>Batches Schedule</h2>
              <table border={5}>            <thead>
                  <tr>
                      <th>BatchId</th>
                      <th>BatchName</th>
                      <th>BatchStartTime</th>
                      <th>BatchEndTime</th>
                      <th>FinalPresentationDate</th>
                            </tr>
              </thead>
                  <tbody>
                             {batches.map(batch=>(
                                  <tr> 
                                    
                             <td>{batch.batchId}</td>
                              <td>{batch.batchName}</td>
                              <td>{batch.startTime}</td>
                              <td>{batch.endTime}</td>
                              <td>{batch.finalPresentationDate}</td>
                              <td><a href={'/RegisteredStudents/' + batch.batchId} class="btn btn-primary">Registered Student as per Batch</a></td>
                             </tr>

  ))}
                   
                  </tbody>      
                
                 </table>  
               
                 </div>
      );
 
}

