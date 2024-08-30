"use client"
import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null)

const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  
  return (
    <AppContext.Provider value={{ setCartItems, cartItems }} >
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider;

export function useAppContext() {
  return useContext(AppContext)
}
