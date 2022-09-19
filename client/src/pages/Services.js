import React from 'react'
import {ServiceList} from "../helpers/ServiceList"
import {PartnerList} from "../helpers/ServiceList"
import ServiceItem from "../components/ServiceItem"
import "../styles/Services.css";
import {useState} from 'react';
import PopupForm from '../components/PopupForm';
import "../styles/PopupForm.css";
import PopupDeliv from '../components/PopupDeliv'
import PopupErrand from '../components/PopupErrand'

function Services() {
  const [setButtonPopup] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);


  // const auth = localStorage.getItem('user');

  return (
    <div className='services' >
      <div className='serviceTitle'><h1>Services</h1></div>
     
         <div className='serviceList'>
        {ServiceList.slice(0,1).map((serviceItem, key) =>{
            return <button className='no-padding' onClick={() => [setOpenModal(true), setOpenModal2(false), setOpenModal3(false)]}>

        <ServiceItem
            key={key}
            image={serviceItem.image}
            name={serviceItem.name}            
            />
            
                </button> 
        })}
        
        {ServiceList.slice(1,2).map((serviceItem, key) =>{
            return <button className='no-padding' onClick={() => [setOpenModal2(true), setOpenModal(false), setOpenModal3(false)]} >

        <ServiceItem
            key={key}
            image={serviceItem.image}
            name={serviceItem.name}            
            />
            
                </button> 
        })} 

{ServiceList.slice(2,3).map((serviceItem, key) =>{
            return <button className='no-padding' onClick={() => [setOpenModal3(true), setOpenModal2(false), setOpenModal(false)]} >

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
          
          <PopupForm open={openModal} onClose={() => setOpenModal(false)}/>
          <PopupDeliv open={openModal2} onClose={() => setOpenModal2(false)}/>
          <PopupErrand open={openModal3} onClose={() => setOpenModal3(false)}/>
        </div>
       
    </div>
    

  );
}

export default Services