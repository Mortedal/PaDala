import React, { useState } from 'react'
import Logo from '../assets/logopd.png'
import {Link, useNavigate} from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {

  const navigate = useNavigate();

const [openLinks, setOpenLinks] = useState(false)

const auth = localStorage.getItem('user');

const toggleNavbar = () => {
    setOpenLinks(!openLinks);
}

const logout = () => {
  localStorage.clear();
  navigate('/')
}
    
  return (
    <div className='navbar'>
      {
          auth ?
        <div className='leftSide' id={openLinks ? "open" : "close"}> 
         <img src={Logo} alt="logo"/>
         <div className='hiddenLinks'>
          
         <Link to ="/"> Home </Link>
         <Link to ="/services"> Services </Link>
         <Link to ="/about"> About  </Link>
         <Link to ="/dashboard"> Dashboard  </Link>

         {auth ? <Link onClick={logout} to ="/"> Logout </Link>:<Link to ="/login"> Login  </Link>}
         
         </div>
        </div>
        :

        <div className='leftSide' id={openLinks ? "open" : "close"}> 
         <img src={Logo} alt="logo"/>
         <div className='hiddenLinks'>
          
         <Link to ="/"> Home </Link>
         <Link to ="/services"> Services </Link>
         <Link to ="/about"> About  </Link>

         {auth ? <Link onClick={logout} to ="/"> Logout </Link>:<Link to ="/login"> Login  </Link>}
         
         </div>
        </div>
      }

        {
          auth ?
            <div className='rightSide'>
              <Link to ="/"> Home </Link>
              <Link to ="/services"> Services </Link>
              <Link to ="/about"> About  </Link>
              <Link to ="/dashboard"> Dashboard  </Link>
              {auth ? <Link onClick={logout} to ="/"> Logout </Link>:<Link to ="/login"> Login  </Link>}
              
              <button onClick={toggleNavbar}>
                  <ReorderIcon />
              </button>
        </div>
        
        :
        
        <div className='rightSide'>
              <Link to ="/"> Home </Link>
              <Link to ="/services"> Services </Link>
              <Link to ="/about"> About  </Link>
              {auth ? <Link onClick={logout} to ="/"> Logout </Link>:<Link to ="/login"> Login  </Link>}
              
              <button onClick={toggleNavbar}>
                  <ReorderIcon />
              </button>
        </div>

        }
        
        
    </div>
  )
}

export default Navbar