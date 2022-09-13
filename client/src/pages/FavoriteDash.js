import React from 'react'
import Sidebar from "../components/Sidebar.js";
function Dashboard() {
    return (
    <div className="Dashboard">
        
        <Sidebar />
        <div className='dashbox'>
        <p>This is your favorites</p>
        </div>
    </div>
    )   
}

export default Dashboard
