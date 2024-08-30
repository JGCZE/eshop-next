"use server"
import AllProducts from "./components/AllProducts";

//const endpoint = 'https://fakerapi.it/api/v1/products';
const endpoint = 'https://fakestoreapi.com/products'

const getAllProducts = async () => {
  try {
    const response = await fetch(endpoint)
    const data = await response.json()

    return data;
  } catch (error) {
  }
}

const ProductsPage = async () => {
  const products = await getAllProducts()

  return (
    <div>
      <AllProducts products={products} />
    </div>
  )
}

export default ProductsPage
