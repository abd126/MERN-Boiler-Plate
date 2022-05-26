import React from 'react'
import { Route, Routes } from 'react-router-dom';
import {Login, Signup} from "../Screens/index"





const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </div>

  )
}

export default Router