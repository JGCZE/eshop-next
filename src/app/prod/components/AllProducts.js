"use client"
import { useState } from "react"
import { OneProduct } from "./components/OneProduct"
import Cart from "./components/Cart"
import { useAppContext } from "@/store/globalStore"

const AllProducts = (products) => {
  const allProd = products.products.data
  const [AllProducts,] = useState(allProd)
  const { setCartItems, cartItems } = useAppContext()

  const addProducts = (id) => {
    const existingItem = cartItems.find((item) => item.id === id)

    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );
      setCartItems(updatedCartItems)
    } else {
      const productToAdd = AllProducts.find((product) => product.id === id);
      if (productToAdd) {
        setCartItems([...cartItems, { ...productToAdd, amount: 1 }]);
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
