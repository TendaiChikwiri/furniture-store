import React from 'react';
import { useParams, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import "../styles/ProductPage.scss";

const Product = ({ furnitureData }) => {
  let { id } = useParams();
  let item = {}

  for (let i = 0; i < furnitureData.length; i++) {
    if (furnitureData[i].id === parseInt(id)) {
      item = furnitureData[i];
    }
  }
  return (
    <main>
      <h1 className="go-back"><Link to="/"><BiArrowBack /></Link></h1>
      <div className="product-container">
        <div className="img-container">
          <img src={item.img} alt="" />
        </div>
        <div className="info-container">
          <h1 className="name">{item.name}</h1>
          <p className="description">{item.description}</p>
          <div className="price-cart">
            <h3 className="price">${item.price}</h3>
            <button className="addCart">Add To Cart</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Product
