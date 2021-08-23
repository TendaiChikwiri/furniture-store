import React from 'react'
import ProductGrid from '../components/ProductGrid'

const Home = ({ addToCart, furnitureData }) => {
  return (
    <main>
      <h1>Home page</h1>
      <ProductGrid addToCart={addToCart} furnitureData={furnitureData} />
    </main>
  )
}

export default Home
