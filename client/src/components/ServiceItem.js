import React from 'react'

function ServiceItem({image,name}) {
  return (
    <div className='serviceItem'>
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
    </div>
  )
}

export default ServiceItem
