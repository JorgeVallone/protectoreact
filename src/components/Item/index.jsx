import React from 'react'
import ItemCount from '../ItemCount'
import './styles.css';

const Item = ({products}) => {
     
const onAdd = () => {
    console.log ("agregue al carrito")
}

  return (
    <div className='card'>
        <h2>{products.name}</h2>
        <img src={products.img} alt="" />
        <p className='price'>{products.price}</p>
        <p>{products.description}</p>
        
        <ItemCount stock={8} initial={1} onAdd={onAdd}/>

    </div>
  )
}

export default Item