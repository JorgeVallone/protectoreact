import React from "react";
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './styles.css';


const ItemListContainer = () => {

  
  const {categoryId} = useParams();
  const [loading, productos, error] = useFirebase(categoryId)

  console.log(productos,error,loading);
 


  return (

    <>
            {loading ? 
            <h2 className="buttonLoad">Loading...
            
            <span id="loading"></span></h2>
           
            :
            <ItemList products={productos} />}
            {error && <h2>{error}</h2>}
        </>

  )

};



export default ItemListContainer;