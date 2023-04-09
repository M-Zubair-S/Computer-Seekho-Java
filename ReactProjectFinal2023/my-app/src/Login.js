import React, { useState } from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';
import { json, Link, Navigate } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";
function Login() {
  const [user, setUser] = useState({
    userId: '',
    password: ''
  });
  const [data1, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  }
  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    fetch("https://localhost:7235/api/Logins", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }).then(response => response.json())
      .then(data => {
        if (data[0].userId) {
          console.log(data);
          //setData(data)
          const u = JSON.stringify(data)
          sessionStorage.setItem("key", u)
          console.log(u);
          console.log("hello");
          window.location.href = "/AdminPanel";
        }
        else
          setErrorMessage("Invalid user ID or password.");
        console.log(data);

      }).catch(error => console.log(error));
    navigate('/AdminPanel');
  }

  return (
    <>
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6'><div className="container mt-3">
          <Card className="p-10">
            <h1>Login</h1>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="userId">
                <Form.Label>User ID:</Form.Label>
                <Form.Control type="text" name="userId" value={user.userId} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" name="password" value={user.password} onChange={handleInputChange} />
              </Form.Group>
              <Button type="submit">Login</Button>
              <Link to="/Staff" className="btn btn-link">Not a member? Register now!</Link>
            </Form>
          </Card>
        </div>
        </div>
        <div className='col-md-3'></div>

      </div>
    </>
  );
}

export default Login;