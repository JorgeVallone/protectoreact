import React, { useContext } from 'react'
import { Shop, useCart } from '../../context/ShopProvider'
import ordenGenerada from '../../services/generarOrden';
import './styles.css';
const Cart = () => {
  

  const {cart} = useContext(Shop);
  const {cartTotal, cartQuantity, isInCart, }= useCart();



  const handleBuy = () => {
    const importeTotal = cartTotal();
    const orden = ordenGenerada("Alberto", "albertovallone33@gmail.com", 26144444, cart, importeTotal);
    console.log(orden );

  }


 
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

        <button onClick={handleBuy}>Confirmar compra</button>
        </tr>
       
     
     
     })}
    </table>
    </>
    )
}

export default Cart