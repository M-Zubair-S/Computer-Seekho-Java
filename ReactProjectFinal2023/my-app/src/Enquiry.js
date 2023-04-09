import {useState } from "react";
import React from "react";
import {Formik,Form,Field,ErrorMessage} from "formik";
import * as yup from "yup";
import { useNavigate} from "react-router-dom";

function Printtest()
{
     const [reg, setreg] = useState({}); 
   let navigate = useNavigate();
   const handleChange1 = (event) => {
       const name = event.target.name;
       const value = event.target.value;
       setreg(values => ({ ...values, [name]: value }))
   }
   const handleSubmit = (event) => {
      let demo = JSON.stringify(reg);
      fetch("https://localhost:7235/api/Enquiries/",{
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: demo
      }).then(r => { console.log(r.json()) })
      navigate('/FollowupAllJava');
      event.preventDefault();
   }
    const defaultValue={
       enquirer_name:"" ,
       enquirer_address:"",
       enquirer_mobile:"",
       enquirer_alternate_mobile:"",
       enquirer_email_id:"",
       enquiry_date:"",
       enquirer_query:"",
       follow_up_date:"",
       enquiry_processed_flag:"",
        staff_id:"",
      //  courseId:"" 
       }
  /* const validationSchema = yup.object().shape({
    Student_Name: yup.string().min(2, 'Too Short!')
    .max(15, 'should not exceed 15 character!').required("Please Enter your name"),
  
    mobile: yup.number().min(10, "Mobile number must be 10 digit at minimum").required("please enter mobile number"),
    qualification:yup.string().max(30,"should not exceed 30 charcters").required("Enter Your Qualification")
   })
*/
   function handleMultipleChanges(event) {
          handleChange1(event);
    }
       
    
    return(
        <div className="container">
        <div className="col-md-12-text-center mt-5">
        <div className="regis">
         
        <Formik initialValues={defaultValue} 
          onSubmit={handleSubmit} >
            <Form onSubmit={handleSubmit}>
              
        <label>EnquirerName</label> <Field type="text" name="enquirer_name" placeholder="Enter Your Name" value={reg.enquirer_name} onChange={handleChange1} className="form-control" required/>
         <p className="text-danger">
            <ErrorMessage name="name" />
         </p>
           <label>Enquirer Address</label> <Field type="text" name="enquirer_address" placeholder="Enter Your Address" value={reg.enquirer_address}  onChange={handleChange1} className="form-control"/>
         <p className="text-danger">
           
         </p>
         <label>Mobile</label> <Field type="text" name="enquirer_mobile" placeholder="Enter your Mobile" value={reg.enquirer_mobile} onChange={handleChange1} className="form-control"/> 
         <label>Alternate Number</label> <Field type="text" name="enquirer_alternate_mobile" placeholder="Enter your Alternate No" value={reg.enquirer_alternate_mobile} onChange={handleChange1} className="form-control"/> 
         <label>Email</label> <Field type="text" name="enquirer_email_id" placeholder="Enter your Email" value={reg.enquirer_email_id} onChange={handleChange1} className="form-control"/> 
         <label>Enquiry date</label> <Field type="date" name="enquiry_date" placeholder="Enter your Enquiry Date" value={reg.enquiry_date} onChange={handleChange1} className="form-control"/> 
         <label>Your Query</label> <Field type="text" name="enquirer_query" placeholder="Enter your Query" value={reg.enquirer_query} onChange={handleChange1} className="form-control"/> 
         <label>Followup date</label> <Field type="date" name="follow_up_date" placeholder="" value={reg.follow_up_date} onChange={handleChange1} className="form-control"/> 
         <label>StaffId</label> <Field type="number" name="staff_id" placeholder="Enter your StaffId" value={reg.staff_id} onChange={handleChange1} className="form-control"/> 
         <label>CourseId</label> <Field type="number" name="courseId" placeholder="Enter your CourseId" value={reg.courseId} onChange={handleChange1} className="form-control"/> 
       <button className="btn btn-primary" type="submit">
            Submit
    </button>
            </Form>
        </Formik>
       
        </div>
        </div>
        </div>
        
    )       
}
export default Printtest;