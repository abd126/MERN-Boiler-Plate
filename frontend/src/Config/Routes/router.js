import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../../Screens/home/Home';
import {Login, Signup , Dashboard} from "../../Screens/index"
import PrivateRoutes from './PrivateRoutes';





const Router = () => {

  return (
    <div>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Login />} />
        {/* <Route path='/home' element={<Home />} /> */}
        <Route path='/' element={<PrivateRoutes />} >
        <Route path='dashboard' element={<Dashboard />} />
        </Route> 
      </Routes>
    </div>

  )
}

export default Router