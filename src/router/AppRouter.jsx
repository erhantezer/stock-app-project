import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Brands from '../pages/Brands'
import Dashboard from '../pages/Dashboard'
import Firms from '../pages/Firms'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Products from '../pages/Products'
import Purchases from '../pages/Purchases'
import Register from '../pages/Register'
import Sales from '../pages/Sales'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='register' element={<Register/>} />
        <Route path='stock' element={<PrivateRouter/>}>
          <Route path='' element={<Dashboard/>}>
              <Route index element={<Home/>} />
              <Route path='purchases' element={<Purchases/>}/>
              <Route path='sales' element={<Sales/>}/>
              <Route path='products' element={<Products/>} />
              <Route path='firms' element={<Firms/>} />
              <Route path='brands' element={<Brands/>} />
          </Route>
        </Route>
        <Route/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter