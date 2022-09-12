import React from 'react'
import ItemCount from '../ItemCount'
import './styles.css';

const ItemDetail = ({product}) => {
  return (
    <div>
        <h1>{product.title}</h1>
        <img className='imageItemDetail' src={product.image} alt="product-detail"/>
        <ItemCount/>
    </div>
  )
}

export default ItemDetail