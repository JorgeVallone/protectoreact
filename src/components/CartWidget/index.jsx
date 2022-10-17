import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../../context/ShopProvider';
import './styles.css';

const CartWidget = () => {
  const {cartQuantity} = useCart();
  
  return (
    <div className='divCart'>
       <FiShoppingCart color="red"/>
     <span className='carritoNumber'>{cartQuantity() || ""}</span>
    </div>
  )
}

export default CartWidget