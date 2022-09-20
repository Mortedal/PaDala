import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const PopupForm = ({open,onClose}) => {

  const [useraddress, setUseraddress] = useState('')
  const [storeaddress, setStoreaddress] = useState('')
  const [pickuptime, setPickuptime] = useState('')
  const [cellnum, setCellnum] = useState('')
  const [storename, setStorename] = useState('')
  
  const token = localStorage.getItem('user')

  const username = JSON.parse(token).name

  const typeoferrand = 'Food/Grocery'
  

  async function orderErrand(event) {
    event.preventDefault()

     const response = await fetch('http://localhost:1337/api/order', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify({
             username,
             typeoferrand,
             storename,
             storeaddress,
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
            <h3>Food/Grocery</h3>
            <form onSubmit={orderErrand}>
            <TextField
              value={storename}
              onChange={(e) => setStorename(e.target.value)}
              placeholder="Name of Store"
              type="text"
              style={{width:300}}
              />
            <br/><br/>
            <TextField
              value={storeaddress}
              onChange={(e) => setStoreaddress(e.target.value)}
              placeholder="Store Address"
              type="text"
              style={{width:300}}
              />
            <br/><br/>
            <TextField
              value={useraddress}
              onChange={(e) => setUseraddress(e.target.value)}
              placeholder="Address to Deliver to"
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
              placeholder="Time of Delivery"
              type="text"
              style={{width:300}}
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