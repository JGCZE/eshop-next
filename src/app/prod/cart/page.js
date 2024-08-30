"use client"
import React from 'react'
import { useAppContext } from '@/store/globalStore'
import Link from 'next/link'

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
              const { id, name, description } = oneP
              return (
                <div className='' key={id}>
                  {console.log(name)}
                  <div>{name}</div>
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
