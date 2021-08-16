import React from 'react';
import { useParams } from "react-router-dom"

const Product = ({ furnitureData }) => {
  let { id } = useParams();
  let item = {}

  for (let i = 0; i < furnitureData.length; i++) {
    if (furnitureData[i].id === parseInt(id)) {
      item = furnitureData[i];
    }
  }
  console.log(item)
  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  )
}

export default Product
