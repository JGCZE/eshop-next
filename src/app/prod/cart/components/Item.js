import Image from 'next/image';
import React from 'react'

const Item = ({ data }) => {
  const {id, amount, category, description, image, title, price, rating, /* tags, taxes */ } = data;

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Image src={image} width={40} height={40} />
    </div>
  )
}

export default Item
