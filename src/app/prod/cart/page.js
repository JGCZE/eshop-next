"use client"
import React from 'react'
import { useAppContext } from '@/store/globalStore'
import Link from 'next/link'
import Item from './components/Item'

const Cart = () => {
  const { setCartItems, cartItems } = useAppContext()
  console.log(cartItems)
  return (
    <div>
      Cart
      <p>Obsah košíku</p>
      {cartItems.length > 0 ?
        (<div>
          vaše položky:
          <p className='text-yellow-400'>
            {cartItems.map((oneP) => {
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
