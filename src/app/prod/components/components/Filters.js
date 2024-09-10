import React from 'react'

const CATEGORY = ["mens", "women", "jewelery", "electronics"];

const Filters = (setAllProducts) => {

  return (
    <div className='flex'>
      {CATEGORY.map((category, index) => {
        return (
          <button className='w-40 h-20 border-2' key={index}>
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Filters
