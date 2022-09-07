import React from 'react'
import ItemList from '../../components/ItemList';
import './styles.css';

const ItemListContainer = ({greeting}) => {
  
  
  return (
    <div>
        <h1>{greeting}</h1>
       
        <ItemList/>
    </div>
  )
}

export default ItemListContainer;