"use client"
import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext(null)

const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToLS = (newItems) => {
    setCartItems(newItems)
    localStorage.setItem("cart", JSON.stringify(newItems));
  };

  useEffect(() => {
    const itemsFromLS = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(itemsFromLS);
  }, []);
  
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
