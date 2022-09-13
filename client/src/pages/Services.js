import React from 'react'
import {ServiceList} from "../helpers/ServiceList"
import {PartnerList} from "../helpers/ServiceList"
import ServiceItem from "../components/ServiceItem"
import "../styles/Services.css";
import Popup from '../components/Popup';
import {useState} from 'react';
import PopupForm from '../components/PopupForm';
import "../styles/PopupForm.css";

function Services() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const auth = localStorage.getItem('user');

  return (
    <div className='services'>
      <div className='serviceTitle'><h1>Services</h1></div>
     
         <div className='serviceList'>
        {ServiceList.map((serviceItem, key) =>{
            return <button className='no-padding' onClick={() => setOpenModal(true)} >

        <ServiceItem
            key={key}
            image={serviceItem.image}
            name={serviceItem.name}            
            />
            
                </button> 
        })} 

        
        

      </div>
      
     
      <div className='serviceTitle'><h1>Partnered Stores</h1></div>
      {PartnerList.map((serviceItem, key) =>{
            return <button className='no-padding' onClick={() => setButtonPopup(true)}>
              <ServiceItem
            key={key}
            image={serviceItem.image}
            name={serviceItem.name}            
            />
            </button> 


        })}

        
        <div>
          <button onClick={() => setOpenModal(true)}> Order</button>
          <PopupForm open={openModal} onClose={() => setOpenModal(false)}/>
        </div>
        <div className='testtest' onClick={() => setOpenModal(true)}></div>
    </div>
    

  );
}

export default Services
