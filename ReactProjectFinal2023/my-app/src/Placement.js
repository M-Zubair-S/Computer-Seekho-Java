import React from 'react';
import'./Placement.css'

const Placement = () => {
  const students = [
    {
      name: 'Kumar Sonu',
      image: './image/kumar.jpg',
      comapany: 'Google'
    },
    {
      name: 'Ajay Abrol',
      image: './image/ab.jpg',
      comapany: 'Microsoft'
    },
    {
        name: 'Deepanshu Shrivastava',
        image: './image/ds.jpg',
        comapany: 'Netflix'
      },
      {
        name: 'Aditya Bali',
        image: './image/ad.jpg',
        comapany: 'Amazon'
      },
    {
        name: 'Mayuri Parkar',
        image: './image/mayu.jpg',
        comapany: 'zomato'
      },
      {
        name: 'Sumedh',
        image: './image/sum.jpg',
        comapany: 'flipkart'
      },
      {
        name: 'Pranil Sawant',
        image: './image/pran.jpg',
        comapany: 'Infosys'
      },
      {
        name: 'Rushikesh Patil',
        image: './image/rushi.jpg',
        comapany: 'Jio'
      },
      {
        name: 'Avinash Thokal',
        image: './image/avi.jpg',
        comapany: 'Oyo'
      },
      
    // add more students here
  ];

  return (
    <div className="container">
      {students.map((student, index) => (
        <div key={index} className="card">
          <img src={student.image} alt={student.name} />
          <h2>{student.name}</h2>
          <p>{student.comapany}</p>
        </div>
      ))}
    </div>
  );
};

export default Placement;
