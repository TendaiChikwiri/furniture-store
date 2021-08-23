import React, { useState } from "react";
import "./styles/global.scss"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// Pages
import Home from "./pages/Home";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";

// Components
import Header from "./components/Header"


import furnitureData from "./data";

function App() {

  const [cart, setCart] = useState([])

  const addToCart = (addedItem) => {
    console.log(typeof addedItem)
    // Check if item is already in cart
    const isItemInCart = cart.find(item => item.id === addedItem.id);
    // If item is in cart increase item count
    if (isItemInCart) {
      setCart(cart.map(item =>
        item.id === addedItem.id
          ? { ...item, count: item.count + 1 }
          : item
      ))
    }
    // Else if item is not in cart add new item to cart array
    else {
      setCart([...cart, { ...addedItem, count: 1 }])
    }

  }

  const removeFromCart = (id) => {
    console.log("remove clicked")
    // If count is one, remove when count is zero 
    const updatedCount = cart.map(item =>
      item.id === id
        ? { ...item, count: item.count - 1 }
        : item
    )
    const removeZero = (item) => {
      return item.count >= 0
    }
    setCart(updatedCount.filter(removeZero)
    )
  }

  return (
    <Router>
      <Header cart={cart} />
      <Switch>
        <Route path="/product/:id">
          <Product furnitureData={furnitureData} />
        </Route>
        <Route exact path="/">
          <Home furnitureData={furnitureData} addToCart={addToCart} />
        </Route>
        <Route path="/checkout">
          <Checkout removeFromCart={removeFromCart} addToCart={addToCart} cart={cart} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
