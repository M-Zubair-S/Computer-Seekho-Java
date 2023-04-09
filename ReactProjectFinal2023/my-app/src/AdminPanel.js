import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">AdminPanel</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="Followup">Followup</Nav.Link>
            <Nav.Link href="Followupall">Followupall</Nav.Link>
            <Nav.Link href="Enquiry">Enquiry</Nav.Link>
            <Nav.Link href="getEnquiry">ADMIT</Nav.Link>
            <Nav.Link href="RegisteredStudents">Proceed for Payment</Nav.Link>
            <Nav.Link href="Payment">Payment</Nav.Link> */}
             <Nav.Link href="GetBatchesJava">Batches for Registered Student</Nav.Link>
             <Nav.Link href="Student">Student Registration</Nav.Link>
             <Nav.Link href="GetPayment">All Payment</Nav.Link>
             {/* <Nav.Link href="Followup">Followup</Nav.Link>
             <Nav.Link href="GetEnquiry">GetEnquiry</Nav.Link>
             <Nav.Link href="PostEnquiry">PostEnquiry</Nav.Link> */}
              <Nav.Link href="FollowupAllJava">Followupall</Nav.Link>
              <Nav.Link href="EnquiryJava">Enquiry</Nav.Link>


          </Nav>

          <Form className="d-flex">
                     
            <Nav.Link href="Home">Logout</Nav.Link>
          </Form>
        </Navbar.Collapse>
          </Container>
    
    </Navbar>
  );
}

export default NavScrollExample;