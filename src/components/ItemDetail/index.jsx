import React, { useContext } from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { Shop } from '../../context/ShopProvider';
import ItemCount from '../ItemCount'
import './styles.css';

const ItemDetail = ({product}) => {
  
  const [qty, setQty] = useState(0);
  const navigate = useNavigate();

  const {addItem} = useContext(Shop); 

  const addCart = (quantity) => {
    setQty(quantity);
}

const handleFinish = () => {
  const productToSave = {...product, quantity: qty}
  addItem(productToSave)
 navigate('/cart');
}

console.log(qty);

  return (
    <div>
        <h1>{product.title}</h1>
        <img className='imageItemDetail' src={product.image} alt="product-detail"/>
        {qty ? (
          <button onClick={handleFinish} className="buttonFinalizarCompra">Guardar producto al carrito</button>
          ) : (
          <ItemCount stock={8} initial={1} onAdd={addCart} />
        )}
    </div>
  )
}

export default ItemDetail