import React from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Item = ({product}) => {
  const navigate = useNavigate();  
  const handleNavigate= ()=>{
    navigate(`/detail/${product.id}`)
  } 

  return (
    <div className='card' onClick={handleNavigate}>
        <h2 className='gridItem'>{product.title}</h2>
        <img className='imageCard' src={product.image} alt="" />
        <p className='price'>{product.price}</p>
        <p className='gridItem'>{product.description}</p>  
    </div>
  )
}

export default Item