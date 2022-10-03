import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const PopupForm = ({open,onClose}) => {
  // const navigate = useNavigate();
  const [useraddress, setUseraddress] = useState('')
  const [cellnum, setCellnum] = useState('')
  const [request, setRequest] = useState('')
  

  const token = localStorage.getItem('user')
  const email = JSON.parse(token).email

  const typeoferrand = 'Custom'
  

  async function orderErrand(event) {
    event.preventDefault()

     const response = await fetch('http://localhost:1337/api/order', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify({
             email,
             typeoferrand,
             useraddress,
             cellnum,
             request,
             
         }),
     })

     const data = await response.json()

     if(data.status === 'ok') {
       alert('order created')
      //  navigate('/dashboard')
     }

     console.log(data)
 }


    if(!open) return null


  return (
    <div className='modalContainer'>
        <div className='modalRight'>
            <h3>Custom Errand</h3>
            <form onSubmit={orderErrand}>
            <TextField
              value={useraddress}
              onChange={(e) => setUseraddress(e.target.value)}
              placeholder="Address"
              type="text"
              style={{width:300}}
              />
            <br/><br/>
            <TextField
              value={cellnum}
              onChange={(e) => setCellnum(e.target.value)}
              placeholder="Cellphone Number"
              type="text"
              style={{width:300}}
              />
            <br/><br/>
            <TextField
              value={request}
              onChange={(e) => setRequest(e.target.value)}
              placeholder="Request"
              type="text"
              style={{width:500}}
              />
         <br/><br/>
                <div className='btnContainer'>
                    <Button className='btnPrimary' type="submit">
                         <span className='bold'>Place Order</span>
                         
                    </Button>
                    <button className='btnOutline' onClick={onClose}>
                         <span className='bold'>Cancel Order</span>
                    </button>
                </div>
              </form>
         </div> 
     </div>
  ) 
}

export default PopupForm