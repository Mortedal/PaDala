import React, { useState } from 'react';
// import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../styles/Signup.css'


// handleSubmit(e) {
//   e.preventDefault();
//   const {fname, lname, email, password} = this.state;
//   console.log(fname, lname, email, password);
// };


function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setcPassword] = useState('');

    async function registerUser(event) {
        event.preventDefaul()

        const response = await fetch('http://localhost:1337/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })

        const data = await response.json()

        console.log(data)
    }



  return (  
    <div className='signup'>
       
        <div
        className='rightside'>
          <div className="loginBox">
          <form onSubmit={registerUser}>
            <h1>Sign up</h1><br/>

              <div >
              <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              label="Full Name"
              style={{width:300}}
              />
              </div><br/>

              <div >
              <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              label="Email"
              style={{width:300}}
              />
              </div><br/>

              <div>
              <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              label="Password"
              style={{width:300}}
              />
              </div><br/> 

              <div>
              <TextField
              value={cpassword}
              onChange={(e) => setcPassword(e.target.value)}
              id="cpassword"
              label="Confim Password"
              style={{width:300}}
              />
              </div><br/> 
              
            {/* <Link to ="/" style={{ textDecoration: 'none' }}> */}
            <input type='submit' value="register "/>
            
            {/* </Link> */}
            </form>
            </div>
        </div>
      </div>
  )
}
export default Signup

