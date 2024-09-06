"use client"
import { useState } from "react"
import { OneProduct } from "./components/OneProduct"
import Cart from "./components/Cart"
import { useAppContext } from "@/store/globalStore"

const AllProducts = (products) => {
  const prod = products.products
  const [AllProducts,] = useState(prod)
  const { setCartItems, cartItems, addToLS } = useAppContext()

  const addProducts = (id) => {
    const existingItem = cartItems.find((item) => item.id === id)

    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );
      setCartItems(updatedCartItems)
      addToLS(updatedCartItems)
    } else {
      const productToAdd = AllProducts.find((product) => product.id === id);
      if (productToAdd) {
        const newCartItems = [...cartItems, { ...productToAdd, amount: 1 }];
        setCartItems(newCartItems);
        addToLS(newCartItems);
      }
    }
  }

  return (
    <div>
      <div className="text-xl">
        <Cart cartItems={cartItems} />
      </div>

      <div className="flex flex-col gap-4">
        {AllProducts.map((oneProd) => {
          return (
            <OneProduct key={oneProd.id} oneProd={oneProd} addProducts={addProducts} />
          )
        })}
      </div>
    </div>
  )
}

export default AllProducts
