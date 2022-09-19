import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const PopupForm = ({open,onClose}) => {
    if(!open) return null
  return (
    <div className='modalContainer'>
        <div className='modalRight'>
            <h3>Food/Grocery</h3>
        <div>
            <TextField
              placeholder="Name of Store"
              type="text"
              style={{width:300}}
              />
            <br/><br/>
            <TextField
              placeholder="Store Address"
              type="text"
              style={{width:300}}
              />
            <br/><br/>
            <TextField
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
              placeholder="Cellphone Number"
              type="text"
              style={{width:300}}
              />
            <br/><br/>
            <TextField
              placeholder="Time of Delivery"
              type="text"
              style={{width:300}}
              />
            
              
         </div>
         <br/><br/>
                <div className='btnContainer'>
                    <button className='btnPrimary'>
                         <span className='bold'>Place Order</span>
                         
                    </button>
                    <button className='btnOutline' onClick={onClose}>
                         <span className='bold'>Cancel Order</span>
                    </button>
                </div>
         </div>
     </div>
  ) 
}

export default PopupForm