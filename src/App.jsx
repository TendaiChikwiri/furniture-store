import React from "react";
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
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/product/:id">
          <Product furnitureData={furnitureData} />
        </Route>
        <Route exact path="/">
          <Home furnitureData={furnitureData} />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
