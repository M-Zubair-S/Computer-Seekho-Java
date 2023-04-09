import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function FollowupData(props) {
    const [enquiry_id, setEnquiryId] = useState('');
    const [staff_id, setStaffId] = useState('');
    //const [followupData, setFollowupData] = useState([]);
    const {code}=useParams();
   /* const handleSubmit = (event) => {
        event.preventDefault();
        fetch("https://localhost:7235/api/followUps/")
            .then(response => response.json())
            .then(data => setFollowupData(data))
            .catch(error => console.log(error));
    };*/
    
    var f1=sessionStorage.getItem("key");
    console.log(f1);
    f1=JSON.parse(f1);
    console.log(f1);
    
    return (
        <div>
           
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Enquirer Name</th>
                        <th>Enquirer Query</th>
                        <th>Enquiry Date</th>
                        <th>Staff</th>
                        <th>followup_Date</th>
                        </tr>
                </thead>
                <tbody>
                     {f1.map(f => (
                        <tr key={f.staff_id}>
                            <td>{f.enquirer_name}</td>
                            <td>{f.enquirer_query}</td>
                            <td>{f.enquiry_date}</td>
                            <td>{f.staff_name}</td>
                            <td>{f.follow_up_date}</td>
                            </tr>
                    ))} 
                </tbody>
            </table>
        </div>
    );
}
export default FollowupData;