import React from 'react';
import { useParams, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import "../styles/ProductPage.scss"

const Product = ({ furnitureData }) => {
  let { id } = useParams();
  let item = {}

  for (let i = 0; i < furnitureData.length; i++) {
    if (furnitureData[i].id === parseInt(id)) {
      item = furnitureData[i];
    }
  }
  return (
    <div>
      <h1><Link to="/"><BiArrowBack /></Link></h1>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  )
}

export default Product
