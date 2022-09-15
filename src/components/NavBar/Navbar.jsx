import React from 'react'
import CartWidget from '../CartWidget'
import './NavBar.css'
import {Link} from 'react-router-dom';

function Navbar ()  {
  return (
    <nav>
         <ul className='ulNav'>
            <label htmlfor="" className='logo'>
              {/* <a href="#logo" className='aLogo'>Beto articulos para el hogar</a> */}
            </label>
            <li className='liNav'><Link to="/">Home</Link></li>
            <li className='liNav'><Link to="/category/men's clothing">Men's clothing</Link></li>
            <li className='liNav'><Link to="/category/women's clothing">Women's clothing</Link></li>
            <li className='liNav'><Link to="/category/electronics">Electronics</Link></li>
            <li className='liNav'><Link to="/category/jewelery">Jewelery</Link></li>
         <CartWidget/>
         </ul>
    </nav>
  )
}

export default Navbar