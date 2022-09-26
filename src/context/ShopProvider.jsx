import { createContext } from "react";
import React from 'react'
import { useState } from "react";
import { useContext } from "react";

export const Shop = createContext();


const ShopProvider = ({children}) => {

  const [cart, setCart] = useState([])

  const addItem = (item) => {
    const productoRepetido = isInCart(item.id)
    console.log(productoRepetido);
    if (productoRepetido){
      const cartModified = cart.map(product => {
        if (product.id === item.id){
          product.quantity += item.quantity
          return product
        }
        return product
      })
      setCart(cartModified)

    } else {
      const cartModificado = [...cart, item]
      setCart(cartModificado)
    }


  }

  const isInCart = (id) => {
    return cart.some(product => product.id === id)
  }

  const removeItem = (itemToRemove) => {
    const filteredProducts = cart.filter(item => item !== itemToRemove)
    setCart(filteredProducts);
}

  const clearCart = () => {
    setCart([])
  }

  const cartQuantity = () => {
    return cart.reduce((acc,product) =>  acc += product.quantity,0)
  }

  const cartTotal = () => {
    return cart.reduce((acc,product) => acc += product.price * product.quantity, 0)
  }

  return (
   <Shop.Provider value={{cart , addItem , removeItem, isInCart, clearCart, cartQuantity, cartTotal}}>
    {children}
   </Shop.Provider>
  )
}
export const useCart = () => useContext(Shop);
export default ShopProvider;