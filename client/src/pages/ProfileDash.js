import React from 'react'
import Sidebar from "../components/Sidebar.js";
import SidebarAdmin from "../components/SidebarAdmin.js";
import SidebarRider from "../components/SidebarRider.js";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate} from 'react-router-dom';


function Dashboard() {

    const navigate = useNavigate();

  const temp = localStorage.getItem('user')
  const email = JSON.parse(temp).email
  const name = JSON.parse(temp).name
  const daddress = JSON.parse(temp).defaultaddress
  const cellnum = JSON.parse(temp).cellnum

  const auth = localStorage.getItem('user');

  async function getUser(event) {
    event.preventDefault()

     const response = await fetch('http://localhost:5000/api/getUserinfo', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify({
             email,

             
         })
     })

     const data = await response.json()

    localStorage.setItem("userInfo",JSON.stringify(data))

    navigate('/editprofile')

 }


    return (
    <div className="Dashboard">
        
        <Sidebar />
            {
               JSON.parse(auth).role === "admin" ? <SidebarAdmin />: ''
            }  
                        {
               JSON.parse(auth).role === "rider" ? <SidebarRider />: ''
            }  

        <div className='dashbox'>
        <h1>Your Profile</h1>
             <TextField
             disabled
              value={name}
              placeholder="Your Username"
              type="text"
              style={{width:500}}
              />
              <br/><br/>
              <TextField
              disabled
              value={email}
              placeholder="Email Address"
              type="text"
              style={{width:500}}
              />
              <br/><br/>
              <TextField
              disabled
              value={daddress}
              placeholder="Default Address"
              type="text"
              style={{width:500}}
              />
              <br/><br/>
              <TextField
              disabled
              value={cellnum}
              // onChange={(e) => setCellnum(e.target.value)}
              placeholder="Phone number"
              type="text"
              style={{width:500}}
              />
              <br/><br/>
              <div align={'center'}>
              <Button type="submit" className='btnPrimary'>Save</Button>
              <Button>Cancel</Button>
              
              <Button onClick={getUser}>Edit Profile</Button>
              </div>
        </div>
    </div>
    )   
}

export default Dashboard
