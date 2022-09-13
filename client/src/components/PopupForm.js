import React from 'react'

const PopupForm = ({open,onClose}) => {
    if(!open) return null
  return (
    <div className='modalContainer'>
        <div className='modalRight'>
            <p className='closeBtn'onClick={onClose}>X</p>
            <h3>Order Details</h3>
                <div className='btnContainer'>
                    <button className='btnPrimary'>
                         <span className='bold'>Place Order</span>
                    </button>
                    <button className='btnOutline'>
                         <span className='bold'>Cancel Order</span>
                    </button>
                </div>
         </div>
     </div>
  ) 
}

export default PopupForm