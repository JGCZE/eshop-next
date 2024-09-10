import React from 'react'

export const OneProduct = ({oneProd, addProducts}) => {
  const { id, name, description, net_price, category } = oneProd

  return (
    <div key={id} className='w-56 ml-8 border-red-100 border-2'>
      <h5 className='text-xl mb-4'>{name}</h5>
      <p>{description}</p>
      <p className='text-yellow-300'>{category}</p>
      <p className='mt-4 text-xl'>{net_price}</p>
      <button
        className='mt-4 border-red-100 border-2 px-4'
        onClick={() => addProducts(id)}
      >
        Add
      </button>
    </div>
  )
}
