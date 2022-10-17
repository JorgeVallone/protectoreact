import React, { useContext, useState } from 'react'
import { Shop, useCart } from '../../context/ShopProvider'
import ordenGenerada from '../../services/generarOrden';
import './styles.css';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { doc, updateDoc, getDoc } from "firebase/firestore";


const Cart = () => {

  const {cart} = useContext(Shop);

  const {cartTotal, cartQuantity, removeItem, clearCart }= useCart();

const [ loading, setLoading] = useState(false);

  const handleBuy = async () => {

    setLoading(true)

    const importeTotal = cartTotal();

    const orden = ordenGenerada("Alberto", "albertovallone33@gmail.com", 26144444, cart, importeTotal);

    console.log(orden );


const docRef = await addDoc(collection(db, "orders"), orden);

cart.forEach(async(productoEnCarrito)=>{

  const productRef = doc(db, "products", productoEnCarrito.id);


  const productSnap = await getDoc(productRef);


  await updateDoc(productRef, {

    stock: productSnap.data().stock - productoEnCarrito.quantity,

  });

});

setLoading(false);

clearCart()

alert( `Gracias por su compra!! Se genero su compra con el ID: , ${docRef.id}`);

  }


 if(loading){

  return <p>Cargando Compra...</p>

 }

  console.log(cart);

  return (



    <>

{!cart.length ?

    <div>

      <h2>Carrito vacio</h2>

    </div>

   : <>

    <table>

      <thead>

        <th>Producto</th>

        <th>Precio Unitario </th>

        <th>Cantidad unitaria </th>

      </thead>

      {cart.map(producto => {

        return <tr key={producto.id}>{producto.title} <img src={producto.image} width='80px' alt={producto.title}  />

        <td> {producto.price}</td> 

        <td>{producto.quantity} </td> 

         <button onClick={()=>removeItem(producto.id)}>Eliminar Artículo</button>

        </tr>

      })}

              <th>Cantidad Total </th>

              <td>{cartQuantity()|| ""} </td>

              <th>Valor Total </th>

               <td>{cartTotal()|| ""} </td> 

    </table>

      <button onClick={handleBuy}>Confirmar compra</button>

      <button onClick={clearCart}>Borrar carrito</button>

    </>}
    </>

    )
}







export default Cart