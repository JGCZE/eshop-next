"use client"
import { useState } from "react"
import { OneProduct } from "./components/OneProduct"
import CartPreview from "./components/CartPreview"
import { useAppContext } from "@/store/globalStore"
import Filters from "./components/Filters"

const AllProducts = (products) => {
  const AllProducts = products.products
  const [productsToSHow, setProductsToSHow] = useState(AllProducts)
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
      const productToAdd = productsToSHow.find((product) => product.id === id);
      if (productToAdd) {
        const newCartItems = [...cartItems, { ...productToAdd, amount: 1 }];
        setCartItems(newCartItems);
        addToLS(newCartItems);
      }
    }
  }

  const filterByProduct = (products) => {
    const filteredProducts = AllProducts.filter((cat) => cat.category === products)
    setProductsToSHow(filteredProducts)
  }

  return (
    <div>
      <div className="text-xl">
        <CartPreview cartItems={cartItems} />
      </div>

      <div>
        <Filters filterByProduct={filterByProduct} />
      </div>

      <div className="flex flex-col gap-4">
        {productsToSHow.map((oneProd) => {
          return (
            <OneProduct key={oneProd.id} oneProd={oneProd} addProducts={addProducts} />
          )
        })}
      </div>
    </div>
  )
}

export default AllProducts
