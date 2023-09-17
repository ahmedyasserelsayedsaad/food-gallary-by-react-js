import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/home'
import Allfood from '../pages/allfood'
import Contact from '../pages/contact'
import FoodDet from '../pages/foodDet'
import Login from '../pages/login'
import Register from '../pages/register'
import Cart from '../pages/cart'
function Router() {
  return (
    
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/allfoods' element={<Allfood />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/allfoods/:id' element={<FoodDet />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path ='/cart' element={<Cart />} />
    </Routes>
  )
}

export default Router