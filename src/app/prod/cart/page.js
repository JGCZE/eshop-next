"use client"
import React, { useEffect, useState } from 'react'
import { useAppContext } from '@/store/globalStore'
import Link from 'next/link'
import Item from './components/Item'

const Cart = () => {
  //const { setCartItems, cartItems } = useAppContext()
  const [itemsFromLS, setItemsFromLS] = useState([])

  useEffect(() => {
    const itemsFromLS = JSON.parse(localStorage.getItem("cart")) || [];
    setItemsFromLS(itemsFromLS);
  }, []);

  console.log(itemsFromLS)

  return (
    <div>
      Cart
      <p>Obsah košíku</p>
      {itemsFromLS.length > 0 ?
        (<div>
          vaše položky:
          <p className='text-yellow-400'>
            {itemsFromLS.map((oneP) => {
              return (
                <div className='' key={oneP.id}>
                  <Item data={oneP} />
                </div>
              )
            })}
          </p>
        </div>
        )
        : (
          <div>Košík je prázdný</div>
        )
      }
      <button>
        <Link href="/prod">
          Zpět na hlavní stranu
        </Link>
      </button>

    </div>
  )
}

export default Cart;
