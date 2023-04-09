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
      fetch("http://localhost:8080/api/Staffs/",{
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: demo
      }).then(r => { console.log(r.json()) })
      navigate('/Login');
      event.preventDefault();
   }
    const defaultValue={
      staff_name:"" ,
      photo_url:"",
      staff_mobile:"",
      userId:"",
      password:"",
      
      
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
              
        <label>StaffName</label> <Field type="text" name="staff_name" placeholder="Enter Your Name" value={reg.staff_name} onChange={handleChange1} className="form-control"/>
         <p className="text-danger">
            <ErrorMessage name="name" />
         </p>
          <label>Photo</label> <Field type="file" name="photo_url" placeholder="Enter Your photo" value={reg.photo_url} onChange={handleChange1} className="form-control"/>
           <label>StaffMobile</label> <Field type="text" name="staff_mobile" placeholder="Enter Your Mobile" value={reg.staff_mobile}  onChange={handleChange1} className="form-control"/>
         <p className="text-danger">
           
         </p>
        
         <label>UserId</label> <Field type="text" name="userId" placeholder="Enter your UserName" value={reg.userId} onChange={handleChange1} className="form-control"/> 
         <label>Password</label> <Field type="password" name="password" placeholder="Enter your Password" value={reg.password} onChange={handleChange1} className="form-control"/> 
                    
               
       
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