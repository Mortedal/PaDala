import React from 'react'
import Sidebar from "../components/Sidebar.js";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Dashboard() {
    return (
    <div className="Dashboard">
        
        <Sidebar />
        <div className='dashbox'>
        <h1>Select your Default Address</h1>
        <input type="radio" value="address"/> address 1 <Button> delete    </Button><br/>
        <input type="radio" value="address"/> address 2 <Button> delete    </Button><br/>
        <input type="radio" value="address"/> address 3 <Button> delete    </Button><br/><br/><br/>
        <TextField
            //   value={useraddress}
            //   onChange={(e) => setUseraddress(e.target.value)}
              placeholder="Add address here"
              type="text"
              style={{width:'100%'}}
              />
              <br/><br/>
              <Button> Add your address</Button>
        </div>
    </div>
    )   
}

export default Dashboard
