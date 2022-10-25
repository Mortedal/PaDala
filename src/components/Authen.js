import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Authen= () => {
    const auth = localStorage.getItem('user')
    
    return auth ?<Outlet />:<Navigate to=""/>
}
//asdasd
export default Authen