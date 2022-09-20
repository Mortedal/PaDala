import React from 'react'
import Sidebar from "../components/Sidebar.js";
function Dashboard() {
    return (
    <div className="Dashboard">
        
        <Sidebar />
        <div className='dashbox'>
        <h1>Recent Transactions</h1>
        <ul>
            <li>Custom Errand - Thursday</li><br/>
            <li>Delivery Errand - Thursday</li><br/>
            <li>Food Errand - Friday</li><br/>
            <li>Delivery Errand - Teusday</li><br/>
            <li>YN market Errand - Wednesday</li><br/>
        </ul>
        </div>
    </div>
    )   
}

export default Dashboard
