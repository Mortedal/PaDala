import React from 'react';
import {Link} from 'react-router-dom';
import bannerPic from '../assets/placeholder.jpeg'
import Button from 'react-bootstrap/Button';
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
            <h1>Log-in</h1>
            <p>Or sign up<Link to="/"> here</Link></p><br/>

            <div className="mb-3">
              <label>Email address</label>
              <input
             type="email"
              className="form-control"
              placeholder="Enter email"
          />
        </div>
            
            <div className="mb-3">
              <label>Password</label>
              <input
             type="password"
             className="form-control"
             placeholder="Enter Password"
            />
            </div>
            <Link to ="/">
            <Button variant="outline-dark">Log-in</Button>
            </Link>
        </div>
      </div>
  )
}

export default Login
