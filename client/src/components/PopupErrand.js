import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const PopupForm = ({open,onClose}) => {
    if(!open) return null
  return (
    <div className='modalContainer'>
        <div className='modalRight'>
            <h3>Custom Errand</h3>
        <div>
            <TextField
              placeholder="Address"
              type="text"
              style={{width:300}}
              />
            <br/><br/>
            <TextField
              placeholder="Cellphone Number"
              type="text"
              style={{width:300}}
              />
            <br/><br/>
            <TextField
              placeholder="Request"
              type="text"
              style={{width:500}}
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