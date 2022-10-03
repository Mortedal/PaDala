import React from 'react'
import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const PopupForm = ({open,onClose}) => {

  const [deliverylocation, setDeliverylocation] = useState('')
  const [useraddress, setUseraddress] = useState('')
  const [pickuptime, setPickuptime] = useState('')
  const [cellnum, setCellnum] = useState('')
  

  const token = localStorage.getItem('user')

  const email = JSON.parse(token).email

  const typeoferrand = 'Delivery'
  

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
             deliverylocation,
             useraddress,
             cellnum,
             pickuptime,
             
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
            <h3>Delivery</h3>
            <form onSubmit={orderErrand}>
            <TextField
              value={useraddress}
              onChange={(e) => setUseraddress(e.target.value)}
              placeholder="Your Location"
              type="text"
              style={{width:300}}
              />
              <br/>
              <input
              type="radio"
              value="address"
            />
            default address
            <br/><br/>
            <TextField
              value={deliverylocation}
              onChange={(e) => setDeliverylocation(e.target.value)}
              placeholder="Delivery Location"
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
              value={pickuptime}
              onChange={(e) => setPickuptime(e.target.value)}
              placeholder="Time of Pick-Up"
              type="text"
              style={{width:300}}
              />
            
        <br/><br/>
                <div className='btnContainer'>
                    <Button className='btnPrimary' type="submit">
                         <span className='bold'>Place Order</span>
                         
                    </Button>
                    <button className='btnOutline' onClick={onClose}>
                         <span className='bold' >Cancel Order</span>
                    </button>
                </div>
              </form>
         </div>
      </div>

  ) 
}


export default PopupForm