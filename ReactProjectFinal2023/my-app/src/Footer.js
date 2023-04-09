import React from "react";
import "./footer.css";

import Nav from 'react-bootstrap/Nav';
function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>Authorised Training Centre</h3>
          <p>
5th Floor, Vidyanidhi Education Complex, Vidyanidhi Road, Juhu Scheme, Andheri (W), Mumbai 400 049 India
9029435311 / 9324095272
 9987062416
training@vidyanidhi.com</p>
        </div>
        <div className="footer-column">
          <h3>Computer Seekho</h3>
          <ul>
            <li> <Nav.Link href="/ContactUs"> <b>Contact Us </b></Nav.Link></li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Course</h3>
          <ul>
            
            <li>
            <Nav/>
            <Nav.Link href="/Pgdac"> <b>PG-DAC </b></Nav.Link>
           
            </li>
            <li>  <Nav.Link href="/dbda"> <b>PG-DBDA </b></Nav.Link></li>
               </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul>
            <li><i className="fab fa-facebook"></i> Facebook</li>
            <li><i className="fab fa-twitter"></i> Twitter</li>
            <li><i className="fab fa-instagram"></i> Instagram</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Compter Seekho. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
