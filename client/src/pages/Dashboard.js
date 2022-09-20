import React from 'react'
import Sidebar from "../components/Sidebar.js";
function Dashboard() {
    return (
    <div className="Dashboard">
        
        <Sidebar />
        <div className='dashbox'>
        <h1>Your Dashboard</h1>
        </div>
    </div>
    )   
}

export default Dashboard
