import React from 'react'
import ItemListContainer from '../containers/ItemListContainer';
import NotFound from '../components/NotFound';
import Cart from '../containers/CartContainer';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import Navbar from '../components/NavBar/Navbar';
  import ItemDetailContainer from '../containers/ItemDetailContainer';   

const Routing = () => {
  return (
    <BrowserRouter>
    <Navbar/>
   <Routes>
       <Route path='/' element={<ItemListContainer/>}/>
       <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
       <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='*' element={<NotFound/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default Routing