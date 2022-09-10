import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
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
    // const history = useHistory();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setcPassword] = useState('')    

    async function registerUser(event) {
       event.preventDefault()

        const response = await fetch('http://localhost:1337/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
                cpassword,
            }),
        })

        const data = await response.json()

        if(data.status === 'ok') {
          // history.push('/login')
        }

        console.log(data)
    }



  return (  
    <div className='signup'>
       
       <div
        className='rightside'>
          <div className="loginBox" >
          
            <h1>Sign up</h1><br/>

            <form onSubmit={registerUser}>

              
              <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{width:300}}
              placeholder="Name"
              type="text"
              />
              <br/><br/>

              
              <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              style={{width:300}}
              />
              <br/><br/>

              
              <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="Password"
              style={{width:300}}
              />
              <br/> <br/>

             
              <TextField
              value={cpassword}
              onChange={(e) => setcPassword(e.target.value)}
              placeholder="Confirm Password"
              type="Password"
              style={{width:300}}
              />
              <br/> 
              
            {/* <Link to ="/" style={{ textDecoration: 'none' }}> */}
            <Button type="submit"> Register </Button> 
            </form>
            {/* </Link> */}
            
            </div>
            
        </div>
        </div>

        
      
  )
}
export default Signup

