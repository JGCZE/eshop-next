"use client"
import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext(null)

const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [itemsFromLS, setItemsFromLS] = useState([])

  const addToLS = (cartItems) => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  useEffect(() => {
    const itemsFromLS = JSON.parse(localStorage.getItem("cart")) || [];
    setItemsFromLS(itemsFromLS);
  }, []);
  
  return (
    <AppContext.Provider value={{ setCartItems, cartItems, addToLS, itemsFromLS }} >
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider;

export function useAppContext() {
  return useContext(AppContext)
}
