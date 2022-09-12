import React from 'react'
import ItemCount from '../ItemCount'
import './styles.css';

const Item = ({product}) => {
     
const onAdd = () => {
    console.log ("agregue al carrito")
}

  return (
    <div className='card'>
        <h2>{product.title}</h2>
        <img className='imageCard' src={product.image} alt="" />
        <p className='price'>{product.price}</p>
        <p>{product.description}</p>
        
        <ItemCount stock={8} initial={1} onAdd={onAdd}/>

    </div>
  )
}

export default Item