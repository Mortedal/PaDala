import React from 'react';
import {Link} from 'react-router-dom';
import bannerPic from '../assets/placeholder.jpeg'
import '../styles/Login.css'

function Login() {
  return (  
    <div className='login'>
        <div
        className='leftside'>
            <img src={bannerPic}/>
        </div>

        <div
        className='rightside'>
            <h1>Log-in</h1>
            <p>Email</p>
            <p>Password</p>
            <Link to ="/home">
              <button>Login</button>
            </Link>
        </div>
      </div>
  )
}

export default Login