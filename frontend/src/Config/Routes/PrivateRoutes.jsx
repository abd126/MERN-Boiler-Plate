import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'




const PrivateRoutes = () => {
    const { currentUser } = useSelector((state) => state.authReducer)
    // console.log(currentUser.role)
    const role = currentUser.role
    if (role === "admin") {
        return <Outlet />
    }
    else {
         <Navigate to="/" />
    }

}



export default PrivateRoutes
