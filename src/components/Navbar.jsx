import React from 'react'
import './NavBar.css'
 

function Navbar ()  {
  return (
    <nav>
         <ul className='ulNav'>
            <label for="" className='logo'>
              <a href="#logo" className='aLogo'>Beto articulos para el hogar</a>
            </label>
            <li className='liNav'><a href="#home">Home</a></li>
            <li className='liNav'><a href="#news">News</a></li>
            <li className='liNav'><a href="#contact">Contact</a></li>
            <li className='liNav'><a href="#about">About</a></li>
         </ul>
    </nav>
  )
}

export default Navbar