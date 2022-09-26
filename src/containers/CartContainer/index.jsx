import React, { useContext } from 'react'
import { Shop, useCart } from '../../context/ShopProvider'
import './styles.css';
const Cart = () => {
  

  const {cart} = useContext(Shop);
  const {cartTotal, cartQuantity, isInCart, }= useCart();
 
  console.log(cart);
  return (
    <>
    <table>
      {cart.map(producto => {
        return <tr key={producto.id}>{producto.title} <img src={producto.image} width='80px' alt={producto.title}  />
        
        <th>Precio Unitario </th>
        <td> {producto.price}</td> 

        <th>Cantidad unitaria </th>
        <td>{isInCart()|| ""} </td>  

        <th>Cantidad Total </th>
          <td>{cartQuantity()|| ""} </td>
        

        <th>Valor Total </th>
         <td>{cartTotal()|| ""} </td> 
        
         <button>Eliminar Artículo</button>

        <button>Confirmar compra</button>
        </tr>
       
     
     
     })}
    </table>
    </>
    )
}

export default Cart