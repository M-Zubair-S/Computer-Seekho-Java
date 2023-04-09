// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// import Carousels from "./Carousels";
// function NavScrollExample() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container fluid>
//         <Navbar.Brand href="#">ComputerSeekho</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="About">About</Nav.Link>
//             <Nav.Link href="ContactUs">Contact Us</Nav.Link>
//             <Nav.Link href="Course">Courses</Nav.Link>
//             <Nav.Link href="Album">Album</Nav.Link>
//             <Nav.Link href="GetBatchesJava">Batches for Registered Student</Nav.Link>
//             <Nav.Link href="Student">Student Registration</Nav.Link>
//             <Nav.Link href="GetPayment">All Payment</Nav.Link>
//             {/* <Nav.Link href="Followup">Followup</Nav.Link>
//             <Nav.Link href="GetEnquiry">GetEnquiry</Nav.Link>
//             <Nav.Link href="PostEnquiry">PostEnquiry</Nav.Link> */}
//              <Nav.Link href="FollowupAllJava">Followupall</Nav.Link>
//              <Nav.Link href="EnquiryJava">Enquiry</Nav.Link>
//           </Nav>

//           <Form className="d-flex">
                     
//             <Nav.Link href="Login">Login</Nav.Link>
//           </Form>
//         </Navbar.Collapse>
//           </Container>
       
//     </Navbar>
   
    
    
//   );
// }

// export default NavScrollExample;

import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';

import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { FaAlignRight } from "react-icons/fa";
import'./Navigation.css'

function Navigation(){
            return(
                    <div>     
                <Navbar sticky="top" bg="light" expand="lg" className="navb">
      <Container fluid>
        
        <Navbar.Brand href="#">
        
        
      </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        {/* <h1> USM's Shriram Mantri Vidyanidhi Info Tech Academy</h1>  */}
       
          <Nav
          
            className="nav1"
            style={{ maxHeight: '10000px' }}
            navbarScroll
          >
            
   <div className="Navigate">
        
            <Nav.Link  Style={{ color:"blue" }} href="/"><b>Home</b></Nav.Link>
            <Nav.Link href="About">About</Nav.Link>
            <Nav.Link href="Course">Courses</Nav.Link>
            <Nav.Link href="Album">Album</Nav.Link>
            <Nav.Link href="./Placement"><b>Placements</b></Nav.Link>
            <Nav.Link href="ContactUs">Contact</Nav.Link>
          
          
            <Form className="d-flex" >
            <Form.Control 
           
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            
              <Nav >
                    <Button  className="bt1" variant="outline-success"  type="submit">Search </Button>
                </Nav>
          </Form>
          </div>
          
          </Nav>
          <Button variant="outline-success"  href="/Login">Login</Button> 
          
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
   
    
              
                          
                    </div>
            )
    }
    export default Navigation;