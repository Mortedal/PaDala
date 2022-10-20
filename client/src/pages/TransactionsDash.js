import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Sidebar from "../components/Sidebar.js";
import SidebarAdmin from "../components/SidebarAdmin"
import SidebarRider from "../components/SidebarRider"



function Dashboard() {

    const auth = localStorage.getItem('user');

    

    const [trans, setTrans] = useState ([])
    const email = auth.email


    

    useEffect(() => {
        const fetchdata = async() => {
                const data = await axios.get('http://localhost:5000/api/getTrans')
                console.log('transactions --- ', data.data)
                setTrans(data.data)
            }
            fetchdata()
                
                .catch(console.error)
                
    
    }, [])
    useEffect(() => {
        const fetchdata = async() => {
                const data = await axios.get('http://localhost:5000/api/getTransSpec', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email
                    }),
                  })
                console.log('transactions --- ', data.data)
                setTrans(data.data)
            }
            fetchdata()
                
                .catch(console.error)
                
    }, [])


    return (
        
    <div className="Dashboard">
        
             {
               JSON.parse(auth).role === "admin" ? <SidebarAdmin />: ''
            }  
                        {
               JSON.parse(auth).role === "rider" ? <SidebarRider />: ''
            }  
                                    {
               JSON.parse(auth).role === "" ? <Sidebar />: ''
            }  

        <div className='dashbox'>
        <h1>Recent Transactions</h1>
        {/* {
                trans && trans?.data.map((trans) => (
                    <li
                    // id={trans._id}
                    // email={ trans.email}
                    // typeoferrand: { type: String},
                    // storename: { type: String},
                    // storeaddress: { type: String},
                    // useraddress: { type: String, required: true },
                    // pickuptime: { type: String},
                    // request: { type: String},
                    // cellnum: { type: String, required: true },
                    />
                ))} */}
        <div>
        <ul>
        {
               JSON.parse(auth).role === "admin" ?
               trans.map(tran=>(
                <li key={tran._id}>
                Email: {tran.email}<br/>
                Type of errand: {tran.typeoferrand}<br/>
                Store name: {tran.storename}<br/>
                </li> 
            ))
            : ''
            }  
                    {
               JSON.parse(auth).role === "rider" ?
               trans.map(tran=>(
                <li key={tran._id}>
                Email: {tran.email}<br/>
                Type of errand: {tran.typeoferrand}<br/>
                Store name: {tran.storename}<br/>
                </li> 
            ))
            : ''
            }  
            {
               JSON.parse(auth).role === "" ?
               trans.map(tran=>(
                <li key={tran._id}>
                Email: {tran.email}<br/>
                Type of errand: {tran.typeoferrand}<br/>
                Store name: {tran.storename}<br/>
                </li> 
            ))
            : ''
            }  
            
            
        </ul>
        </div>
        </div>
    </div>
    )   
}

export default Dashboard
