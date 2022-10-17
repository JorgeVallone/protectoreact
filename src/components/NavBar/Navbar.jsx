import React from 'react'
import CartWidget from '../CartWidget'
import './NavBar.css'
import {Link} from 'react-router-dom';


function Navbar ()  {
  return (
    <nav>
         <ul className='ulNav'>
              <img src='/logo.png' alt='logo' className='logo'/> 
          
            <li className='liNav'><Link to="/">Inicio</Link></li>
            <li className='liNav'><Link to="/category/televisor30">Televisor de 30</Link></li>
            <li className='liNav'><Link to="/category/televisor40">Televisor de 40</Link></li>
            <li className='liNav'><Link to="/category/televisor50">Televisor de 50</Link></li>
            <li className='liNav'><Link to="/category/televisor60">Televisor de 60</Link></li>
            <li className='liNav'><Link to="/category/televisor75">Televisor de 75</Link></li>
         <CartWidget/>
         </ul>
    </nav>
  )
}

export default Navbar