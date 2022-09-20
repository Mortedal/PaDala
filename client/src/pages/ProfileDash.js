import React from 'react'
import Sidebar from "../components/Sidebar.js";
import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Dashboard() {
    return (
    <div className="Dashboard">
        
        <Sidebar />
        <div className='dashbox'>
        <h1>Your Profile</h1>
             <TextField
            //   value={username}
            //   onChange={(e) => setUseraddress(e.target.value)}
              placeholder="Your Username"
              type="text"
              style={{width:500}}
              />
              <br/><br/>
              <TextField
            //   value={username}
            //   onChange={(e) => setUseraddress(e.target.value)}
              placeholder="Email Address"
              type="text"
              style={{width:500}}
              />
              <br/><br/>
              <TextField
            //   value={username}
            //   onChange={(e) => setUseraddress(e.target.value)}
              placeholder="Default Address"
              type="text"
              style={{width:500}}
              />
              <br/><br/>
              <TextField
            //   value={username}
            //   onChange={(e) => setUseraddress(e.target.value)}
              placeholder="Phone number"
              type="text"
              style={{width:500}}
              />
              <br/><br/>
              <div align={'center'}>
              <Button>Save</Button>
              <Button>Cancel</Button>
              </div>

        </div>
    </div>
    )   
}

export default Dashboard
