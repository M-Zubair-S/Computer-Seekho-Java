import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Course from './Course';
import Album from './Album';
import Image from './Image';
import { BrowserRouter, Route, Switch, NavLink, Routes } from 'react-router-dom';
import CoursePost from './CoursePost';
import AlbumPost from  './AlbumPost';
import Student from './Student';
import Login from './Login'; 
import Staff from './Staff';
import Enquiry from './Enquiry';
import Followup from './Followup';
import Batch from './Batch';
import AdminPanel from './AdminPanel';
import FollowupAll from './FollowupAll'
import GetEnquiry from './GetEnquiry';
import Payment from './Payment';
import RegisteredStudents from './RegisteredStudents';
import FollowupAllJava from './FollowupAllJava';
import EnquiryJava from './EnquiryJava';
import GetBatchesJava from './GetBatchesJava';
import GetPayment from './GetPayment';
import ContactUs from './ContactUs';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import Placement from './Placement';
import Pgdac from './Pgdac';
import Dbda from './Dbda'
import Navigation from './Navigation';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
<Header/>
<Navigation/>  
  <BrowserRouter>
  <Routes>
     <Route path="/" element={<App/>} />
    <Route path="Home" element={<Home />}/>
    <Route path="CoursePost" element={<CoursePost/>}/>
    <Route path="Course" element={<Course/>}/>
    <Route path="Album" element={<Album/>}/>
    <Route path="Image/:code" element={<Image/>}/>
    <Route path="Student" element={<Student/>}/>
    <Route path="Login" element={<Login/>}/>
    <Route path="Staff" element={<Staff/>}/>
    <Route path="Student/:code" element={<Student/>}/>
    <Route path="Staff" element={<Staff/>}/>
    <Route path="Enquiry" element={<Enquiry/>}/>
    <Route path="Followup" element={<Followup/>}/>
    <Route path="Followup1" element={<Followup/>}/>
    <Route path="Followup/:staff_id" element={<Followup/>}/>
    <Route path="Login" element={<Login/>}/>
    <Route path="Batch/:code" element={<Batch/>}/>
    <Route path="AdminPanel" element={<AdminPanel/>}/>
    <Route path="FollowupAll" element={<FollowupAll/>}/>
    <Route path="GetEnquiry" element={<GetEnquiry/>}/>
    <Route path="RegisteredStudents" element={<RegisteredStudents/>}/>
    <Route path="Payment/:sid" element={<Payment/>}/>
    <Route path="FollowupAllJava" element={<FollowupAllJava/>}/>
    <Route path="GetBatchesJava" element={<GetBatchesJava/>}/>
    <Route path="RegisteredStudents/:code" element={<RegisteredStudents/>}/>
    <Route path="EnquiryJava" element={<EnquiryJava/>}/>
    <Route path="GetPayment" element={<GetPayment/>}/>
    <Route path="ContactUs" element={<ContactUs/>}/>
    <Route path="About" element={<About/>}/>
    <Route path="Placement" element={<Placement/>}/>
    <Route path="Pgdac" element={<Pgdac/>}/>
    <Route path="dbda" element={<Dbda/>}/>
        </Routes>
</BrowserRouter>
<Footer/>
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
