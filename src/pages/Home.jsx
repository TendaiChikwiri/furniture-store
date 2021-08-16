import React from 'react'
import ProductGrid from '../components/ProductGrid'
import furnitureData from '../data'

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <ProductGrid furnitureData={furnitureData} />
    </div>
  )
}

export default Home
