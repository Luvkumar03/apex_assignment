import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Home"
import Add_Scenario from './Add_Scenario'
import Add_Vehicle from './Add_Vehicle'
import All_Scenarios from './All_Scenarios'

export default function SideBar() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Add_Scenario/>}/>
        <Route path='/' element={<Add_Vehicle/>}/>
        <Route path='/' element={<All_Scenarios/>}/>
    </Routes>
  )
}
