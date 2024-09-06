"use client"
import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null)

const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToLS = (cartItems) => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };
  
  return (
    <AppContext.Provider value={{ setCartItems, cartItems, addToLS }} >
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider;

export function useAppContext() {
  return useContext(AppContext)
}
