import React from 'react'
import {ServiceList} from "../helpers/ServiceList"
import {PartnerList} from "../helpers/ServiceList"
import ServiceItem from "../components/ServiceItem"
import "../styles/Services.css";
import Popup from '../components/Popup';
import {useState} from 'react';

function Services() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className='services'>
      <div className='serviceTitle'><h1>Services</h1></div>
     
         <div className='serviceList'>
        {ServiceList.map((serviceItem, key) =>{
            return <button className='no-padding' onClick={() => setButtonPopup(true)} >
        <ServiceItem
            key={key}
            image={serviceItem.image}
            name={serviceItem.name}            
            />
                </button>
        
        })} 
        <Popup trigger={buttonPopup} setTrigger = {setButtonPopup}>
          <h3>Sorry</h3>
          <p>You need to login first</p>
        </Popup>

      </div>
      
     
      <div className='serviceTitle'><h1>Partnered Stores</h1></div>
      {PartnerList.map((serviceItem, key) =>{
            return <ServiceItem
            key={key}
            image={serviceItem.image}
            name={serviceItem.name}            
            />

        })}
    </div>
  );
}

export default Services
