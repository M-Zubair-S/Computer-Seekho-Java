 //computer-
 import React, { useState,useEffect } from 'react';
 import Container from 'react-bootstrap/Container';
 import './Header.css';
 
 
 const Header = () => {
   const [snippets, setSnippets] = useState([
     'COMPUTER SEEKHO',
     'कंप्यूटर सीखो ',
    
   ]);
   const [currentIndex, setCurrentIndex] = useState(0);
   useEffect(() => {
     const intervalId = setInterval(() => {
       setCurrentIndex((currentIndex + 1) % snippets.length);
     }, 2000);
     return () => clearInterval(intervalId);
   }, [currentIndex, snippets.length]); 
             return(
                 <div>   
      
       <img className="center"
           src= "./image/Logo.jpg" 
           align="left"
         />
       
     
       <div className="background-image" style={{ backgroundImage: `url("https://th.bing.com/th?q=White+Background+Header&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=2&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247")` }}>
       <br/>
       <h1>{snippets[currentIndex]}</h1>
      
         <div className="overlay"></div>
       </div>
       <div className="content">
         {/* Your home page content goes here */} 
       </div>
         
     
          <marquee>
    Achieved 100% Placements in Computer Seekho for PG-DAC Sept 22 and Pg-DBDA Sept 22
 </marquee> 
 
 </div>
       
             )
     }
     export default Header;