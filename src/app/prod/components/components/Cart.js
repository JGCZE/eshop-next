import { useAppContext } from '@/store/globalStore';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react'

const Cart = (cartItems) => {
  const itemsAmout = cartItems.cartItems.length


  return (
    <div className='border-yellow-200 border-2 w-80 m-12'>
      <div>
        {itemsAmout} ks
      </div>
      <button>
        <Link
          href={{
            pathname: "prod/cart",
            query: {
              cartItems,
            }
          }}
        > Obsah košíku </Link>
      </button>
    </div>
  )
}

export default Cart;
