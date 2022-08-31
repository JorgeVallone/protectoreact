import React from 'react'
import { FiShoppingCart } from 'react-icons/fi';
import './styles.css';

const CartWidget = () => {
  return (
    <div className='divCart' style={{


      position: 'absolute',
          right: '20px',
          top: '15px',
    }}
    >
       <FiShoppingCart color="red"/>
    </div>
  )
}

export default CartWidget