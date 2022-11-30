import React from 'react'

function AboutItem({image, name, desc}) {
  return (
    <div className='aboutItem'>
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <h1>{name}</h1>
        <p>{desc}</p>
    </div>
  )
}

export default AboutItem
