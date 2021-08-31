import React from 'react'
import ProductGrid from '../components/ProductGrid'

const Home = ({ addToCart, furnitureData }) => {
  return (
    <main>
      <ProductGrid addToCart={addToCart} furnitureData={furnitureData} />
    </main>
  )
}

export default Home
