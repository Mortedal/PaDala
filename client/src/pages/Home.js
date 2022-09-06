import React from 'react';
import {Link} from 'react-router-dom';
import BannerPic from '../assets/bannerPic.png'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
        <div
        className='headerContainer'
        style={{ backgroundImage: `url(${BannerPic})` }}>
        
            <h1>Pa-Dala</h1>
            <p>Erranding Service</p>
            <Link to ="/login">
            <button>Log-in</button>
            </Link>
        </div>
    </div>
  )
}

export default Home