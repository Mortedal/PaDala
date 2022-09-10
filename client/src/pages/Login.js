import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../styles/Login.css'


// handleSubmit(e) {
//   e.preventDefault();
//   const {fname, lname, email, password} = this.state;
//   console.log(fname, lname, email, password);
// };


function Login() {
  
  return (  
    <div className='login'>
       
        <div
        className='rightside'>
          <div className="loginBox">
            <h1>Log-in</h1>
              <p>Or sign up <Link to="/signup">here</Link></p><br/>
              <div >
              <TextField
              id="filled-disabled"
              label="Email"
              style={{width:300}}
              />
              </div><br/>
              <div>
              <TextField
              id="filled-disabled"
              label="Password"
              style={{width:300}}
              />
              </div><br/> 
              
            {/* <Link to ="/signup" style={{ textDecoration: 'none' }}> */}
            <Button>Log-in</Button>
            {/* </Link> */}
            </div>
        </div>
      </div>
  )
}
export default Login

