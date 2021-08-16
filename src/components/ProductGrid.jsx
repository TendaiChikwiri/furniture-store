import React from 'react'
import { Link } from "react-router-dom"

const ProductGrid = ({ furnitureData }) => {
  return (
    <div className="product-grid">
      {furnitureData.map((item) => (
        <div key={item.id} className="product-container">
          <Link to={`/product/${item.id}`} >

            <h1>{item.name}</h1>
          </Link>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductGrid
