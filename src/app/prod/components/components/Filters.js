import React from 'react'

const CATEGORY = ["men's clothing", "women's clothing", "jewelery", "electronics"];

const Filters = ({ filterByProduct }) => {

  return (
    <div className='flex'>
      {CATEGORY.map((category, index) => {
        return (
          <button className='w-40 h-20 border-2' key={index} onClick={() => filterByProduct(category)}>
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Filters
