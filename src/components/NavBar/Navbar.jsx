import React from 'react'
import CartWidget from '../CartWidget'
import './NavBar.css'


function Navbar ()  {
  return (
    <nav>
         <ul className='ulNav'>
            <label htmlfor="" className='logo'>
              <a href="#logo" className='aLogo'>Beto articulos para el hogar</a>
            </label>
            <li className='liNav'><a href="#home">Home</a></li>
            <li className='liNav'><a href="#news">News</a></li>
            <li className='liNav'><a href="#contact">Contact</a></li>
            <li className='liNav'><a href="#about">About</a></li>
         <CartWidget/>
         </ul>
    </nav>
  )
}

export default Navbar