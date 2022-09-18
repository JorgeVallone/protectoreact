import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './styles.css';


const ItemCount = ({stock, initial, onAdd}) => {
  
  const [count , setCount] = useState (initial);
  
  const handleAdd = () =>{
    if (count < stock){
        setCount(count + 1);
    } else{
        alert("No hay suficiente stock");

    }
  }
  const handleDecrement = () =>{
    if (count > 0){
      setCount(count - 1);
    }
  }
  const addCart = () => {
    onAdd(count);
    setCount(initial)
  }


  useEffect (() => {
    console.log("se monto el ItemCount");

  }, [])

    return (
        <div>
          <div className='containerItemCount'>

          <div className='divItemCount'>
            <button onClick={handleDecrement} className='buttonDecrement'>-</button>
            <span className='spanCount'>{count}</span>
            <button onClick={handleAdd} className='buttonAdd'>+</button>
            </div>
            <button onClick={addCart}className='buttonAddCarrito'>Agregar al carrito</button>

          </div>

        </div>
  )
  
}

export default ItemCount