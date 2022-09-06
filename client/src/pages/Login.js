import React from 'react';
import {Link} from 'react-router-dom';
import bannerPic from '../assets/placeholder.jpeg'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/Login.css'


function Login() {
  return (  
    <div className='login'>
        <div
        className='leftside'>
            <img src={bannerPic} alt='pic'/>
        </div>

        <div
        className='rightside'>
            <h1>Log-in</h1><br/><br/>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            </Form>
            
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter email" />
            </Form.Group>
            </Form><br/>
            <Link to ="/">
            <Button variant="outline-dark">Log-in</Button>
            </Link>
        </div>
      </div>
  )
}

export default Login
