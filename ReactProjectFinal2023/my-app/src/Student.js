import {useState ,useEffect} from "react";
import React from "react";
import {Formik,Form,Field,ErrorMessage} from "formik";
import * as yup from "yup";
import { useNavigate, useParams} from "react-router-dom";


function Printtest(props)
{
  const [batchOptions, setBatchOptions] = useState([]);
const [selectedBatchId, setSelectedBatchId] = useState("")
  const { code }  = useParams();
  const [reg, setreg] = useState({}); 
  const [Student , setStudent]=useState({});
   let navigate = useNavigate();
   const handleChange1 = (event) => {
       const name = event.target.name;
       const value = event.target.value;
       setreg(values => ({ ...values, [name]: value }))
   }
   /*useEffect(() => {
    fetch("https://localhost:7235/api/Students/" )
        .then(res => res.json()
        )
        .then((result) => {
            setreg(result);
        }
        );
}, {});*/

useEffect(() => {
  fetch("http://localhost:8080/api/addBatch")
    .then(response => response.json())
    .then(data => {
      const options = data.map(batch => ({
        value: batch.batchId,
        label: batch.batchName
      }));
      setBatchOptions(options);
      
    })
    .catch(error => console.log(error));
}, []);
console.log(batchOptions);
   const handleSubmit = (event) => {
     // let demo = JSON.stringify(reg);
     const demo = JSON.stringify({
      ...reg,
      studentbatchId: selectedBatchId
    });
     fetch(("http://localhost:8080/api/addStudent"),
      {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: demo
      }).then(r => { (console.log(r.json())) 
        .then((r)=> {setStudent(r);})
       
      })
      console.log(Student);
      console.log(Student.studentId);
       navigate('/Student');
      event.preventDefault();
   }
    const defaultValue={
      studentId:"",
      studentName:"" ,
      studentAddress:"",
      studentGender:"",
      photoUrl:"",
      studentDob:"",
       qualification:"",
       studentMobileNo:"",
       studentPassword:"",
       studentUsername:"",
       //batchName:""
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
         <h2>Student Registration Form</h2>
        <Formik initialValues={defaultValue} 
          onSubmit={handleSubmit} >
            <Form onSubmit={handleSubmit}>
              
        <label>Name</label> <Field type="text" name="studentName" placeholder="Enter Your Name" value={reg.studentName} onChange={handleChange1} className="form-control"/>
         <p className="text-danger">
            <ErrorMessage name="name" />
         </p>
         <label>Address</label> <Field type="text" name="studentAddress" placeholder="Enter Your Address" value={reg.studentAddress} onChange={handleChange1} className="form-control"/>
         <label>Gender</label>    <Field component="select" name="studentGender" placeholder="select your gender" value={reg.studentGender} onChange={handleChange1} className="form-control" >

                <option value="" disable>Please Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="transgender">Transgender</option>
            </Field>

         <label>Photo</label> <Field type="file" name="photoUrl" placeholder="Enter Your photo" value={reg.photoUrl} onChange={handleChange1} className="form-control"/>
         <label>DOB</label> <Field type="date" name="studentDob" placeholder="Enter Your DOB" value={reg.studentDob} onChange={handleChange1} className="form-control"/>
         <label>Qualification</label> <Field type="text" name="qualification" placeholder="Enter Your Qualification" value={reg.qualification}  onChange={handleChange1} className="form-control"/>
         <p className="text-danger">
           
         </p>
         <label>Mobile</label> <Field type="text" name="studentMobileNo" placeholder="Enter your qualification" value={reg.studentMobileNo} onChange={handleChange1} className="form-control"/> 
         <label>Password</label> <Field type="text" name="studentPassword" placeholder="Enter your Password" value={reg.studentPassword} onChange={handleChange1} className="form-control"/> 
         <label>UserName</label> <Field type="text" name="studentUsername" placeholder="Enter your UserName" value={reg.studentUsername} onChange={handleChange1} className="form-control"/> 
         
         {/* <label>batch_id</label> <Field type="number" name="batch_id" placeholder="" value={reg.batch_id} onChange={handleChange1} className="form-control"/>
                  */}

<label>Batch</label>
<Field
  component="select"
  name="batchName"
  value={reg.batchName}
  onChange={event => {
    const batchName = event.target.value;
    const batchOption = batchOptions.find(option => option.label === batchName);
    setSelectedBatchId(batchOption.value);
    handleChange1(event);
  }}
  className="form-control"
>
  <option value="">Select Batch</option>
  {batchOptions.map(option => (
    <option key={option.value} value={option.label}>
      {option.label}
    </option>
  ))}
</Field>
                  
                  <div className="col-md-12 mt-4">
            <label className="form-inline">
            <Field type="checkbox" name="termsAndCond"></Field>
            I accept terms and conditions
            </label>
            <p className="text-danger">
            <ErrorMessage name="termsAndCond" />
         </p>
        
         </div>
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