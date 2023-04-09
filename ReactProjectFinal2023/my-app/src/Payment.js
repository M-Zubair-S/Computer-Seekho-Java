import { useState, useEffect } from "react";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";


function Printtest(props) {
  const [courseList, setCourseList] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [Coursefee, setCoursefee]= useState("");
  const [studentList, setStudentList]=useState([]);
  const [selectedStudentId,setSelectedStudentId]=useState("");
  const [amount,setamount]=useState("");
  const [selectedbalance,setBalance]=useState("");
  //const {code} = useParams();
  const [reg, setPayment] = useState({});
  //const [Course,setCourses]=useState()
  let navigate = useNavigate();
  //  const handleChange1 = (event) => {
  //      const name = event.target.name;
  //      const value = event.target.value;
  //      setPayment(values => ({ ...values, [name]: value }))
  //  }

  const handleChange1 = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    //  setPayment((values) => ({ ...values, [name]: value }));
    setPayment({ ...reg, [name]: value });
    if (name === "coursePaymentId") {
      setSelectedCourseId(value);
      console.log(selectedCourseId);
    }
    // if (name=="amount")
    // setamount(event.target.value)

  };
console.log(amount);
  const handleChange3 = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    //  setPayment((values) => ({ ...values, [name]: value }));
    setPayment({ ...reg, [name]: value });
    if (name === "coursePaymentId") {
      setSelectedCourseId(value);
      console.log(selectedCourseId);
    }
    setamount(event.target.value)
  }
   const handleChange2 = (event) => {
    
      //  setCoursefee(event.target.value);
      //  setSelectedCourseId(event.target.value)
      const [courseId, courseFees] = event.target.value.split(',');
      setSelectedCourseId(courseId);
      setCoursefee(courseFees);
    console.log(Coursefee);
    console.log(selectedCourseId);
   }

  // const handleChange3 =(event)=> {
  //   const name = event.target.name;
  //   const value =
  //     event.target.type === "checkbox"
  //       ? event.target.checked
  //       : event.target.value;
  //   //  setPayment((values) => ({ ...values, [name]: value }));
  //   setPayment({ ...reg, [name]: value });
  //   if (name === "studentPaymentId") {
  //     setSelectedStudentId(value);
  //     }
  // }
  const handleChange = (event) => {
    //  setCoursefee(event.target.value);
    //  setSelectedCourseId(event.target.value)
    const [courseId, courseFees] = event.target.value.split(',');
    setSelectedCourseId(courseId);
    setCoursefee(courseFees);
  console.log(Coursefee);
  console.log(selectedCourseId);
  }



  console.log(selectedCourseId);
  useEffect(() => {
    fetch("http://localhost:8080/api/addCourse")
      .then((response) => response.json())
      .then((data) => setCourseList(data));
  }, []);
  console.log(courseList);
  useEffect(() => {
    fetch("http://localhost:8080/api/addStudent")
      .then((response) => response.json())
      .then((data) => setStudentList(data));
  }, []);
  console.log(studentList);

  //    useEffect(() => {
  //     fetch("https://localhost:7235/api/Courses/")
  //         .then(res => res.json())
  //         .then((result) => {
  //             setPayment(result);
  //         }
  //         );
  // }, {});

 function handlefocus(){
    setBalance(Coursefee-parseInt(amount))
   }
      
  const handleSubmit = (event) => {
    //let demo = JSON.stringify(reg);
    const demo = JSON.stringify({
      ...reg,
      studentPaymentId: selectedStudentId,
      coursePaymentId : selectedCourseId,
      balance:selectedbalance
    });
    fetch("http://localhost:8080/api/Payments",
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: demo
      }).then(r => {
        console.log(r.json())
        setPayment(r);

      })
    navigate('/');
    event.preventDefault();
  }
  const defaultValue = {
    //payment_transaction_id: "",
    paymentDate: "",
    paymentDone: "",
    paymentReceiptSend: "",
    amount: "",
    balance: "",
    //student_Id:"",

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


  return (
    <div className="container">
      <div className="col-md-12-text-center mt-5">
        <div className="regis">

          <Formik initialValues={defaultValue}
            onSubmit={handleSubmit} >
            <Form onSubmit={handleSubmit}>


              <p className="text-danger">
                <ErrorMessage name="name" />
              </p>
              {/* <label>payment_transaction_id</label> <Field type="text" name="payment_transaction_id" placeholder="Transaction Id" value={reg.payment_transaction_id} onChange={handleChange1} className="form-control" /> */}


              <label>payment_date</label> <Field type="date" name="paymentDate" placeholder="paymentDate" value={reg.paymentDate} onChange={handleChange1} className="form-control" />
              <label>payment_done</label> <Field type="text" name="paymentDone" placeholder="Payment Done" value={reg.paymentDone} onChange={handleChange1} className="form-control" />
              <label>payment_receipt_send</label> <Field type="text" name="paymentReceiptSend" placeholder="Enter Payment Receipt send" value={reg.paymentReceiptSend} onChange={handleChange1} className="form-control" />
              <p className="text-danger">
              <label>CourseFees</label> <Field type="text" name="courseFees" placeholder="Coursefee" value={Coursefee} onChange={handleChange2} className="form-control" />
              </p>
              <label>amount</label> <Field type="text" name="amount" placeholder="Enter your Amount" value={reg.amount} onChange={handleChange3} className="form-control" />
              <label>balance</label> <Field type="text" name="balance" placeholder="Balance" value={selectedbalance} onFocus={handlefocus} onChange={handleChange1} className="form-control" />
             
              {/* <label>student_Id</label> <Field type="text" name="student_Id" placeholder="Enter your UserName" value={code} onChange={handleChange1} className="form-control"/>  */}
              {/* <label>Student_Name</label> <Field type="text" name="StudentName" placeholder="Coursefee" value={reg.Course} onChange={handleChange1} className="form-control" /> */}
              <label>CourseName </label>
              <select
                name="coursePaymentId"
                value={selectedCourseId}
               //onChange={(event) => setSelectedCourseId(event.target.value)}
               onChange={handleChange2}
                className="form-control"
              >
                <option value="">Select a Course you want to enroll</option>
                {courseList.map((course) => (
                  <option key={course.courseId} value={`${course.courseId},${course.courseFees}`} >
                    
                    {course.courseName}
                  </option>
                ))}

              </select>
              <label>Student Name </label>
              <select
                name="studentPaymentId"
                value={selectedStudentId}
               onChange={(event) => setSelectedStudentId(event.target.value)}
               //onChange={handleChange3}
                className="form-control"
              >
                <option value="">Select a Name of Student</option>
                {studentList.map((student) => (
                  <option key={student.studentId} value={student.studentId} >
                    {student.studentName}
                  </option>
                ))}
                   </select>
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
              <button className="Payment" >
                Payment

              </button>
            </Form>
          </Formik>

        </div>
      </div>
    </div>

  )
}
export default Printtest;