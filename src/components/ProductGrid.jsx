import React from 'react'
import { Link } from "react-router-dom";
import "../styles/ProductGrid.scss";

const ProductGrid = ({ furnitureData, addToCart }) => {
  return (
    <div className="product-grid">
      {furnitureData.map((item) => (
        <div key={item.id} className="product">
          <Link to={`/product/${item.id}`} >
            <img src={item.img} alt="" />
            <h1>{item.name}</h1>
          </Link>
          <div className="price-add">
            <p className="price">&#36;{item.price}</p>
            <button onClick={() => addToCart(item)} className="addCart">Add To Cart</button>
          </div>

        </div>
      ))
      }
    </div >
  )
}

export default ProductGrid
