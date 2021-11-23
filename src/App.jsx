import { useState } from "react";
import "./styles/global.scss";
import { ChakraProvider, extendTheme, Container } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "@fontsource/nunito-sans";
// Pages
import Home from "./pages/Home";

import Checkout from "./pages/Checkout";

// Components
import Header from "./components/Header";
import furnitureData from "./data";

const fontTheme = extendTheme({
  fonts: {
    heading: "Nunito Sans",
    body: "Nunito Sans",
  },
});

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (addedItem, count) => {
    // Check if item is already in cart
    const isItemInCart = cart.find((item) => item.id === addedItem.id);
    // If item is in cart increase item count
    if (isItemInCart) {
      setCart(
        cart.map((item) =>
          item.id === addedItem.id
            ? { ...item, count: item.count + count }
            : item
        )
      );
    }
    // Else if item is not in cart add new item to cart array
    else {
      setCart([...cart, { ...addedItem, count: count }]);
    }
  };

  const reduceFromCart = (id) => {
    // If count is one, remove when count is zero
    const updatedCount = cart.map((item) =>
      item.id === id ? { ...item, count: item.count - 1 } : item
    );
    const removeZero = (item) => {
      return item.count >= 0;
    };
    setCart(updatedCount.filter(removeZero));
  };

  const deleteFromCart = (id) => {
    const deleteitem = (item) => {
      return item.id !== id;
    };
    setCart(cart.filter(deleteitem));
  };

  return (
    <ChakraProvider theme={fontTheme}>
      <Container maxWidth="container.lg" sx={{ marginBottom: "10rem" }}>
        <Router>
          <Header
            cart={cart}
            deleteFromCart={deleteFromCart}
            reduceFromCart={reduceFromCart}
            addToCart={addToCart}
          />
          <Switch>
            <Route exact path="/">
              <Home furnitureData={furnitureData} addToCart={addToCart} />
            </Route>
            <Route path="/checkout">
              <Checkout
                deleteFromCart={deleteFromCart}
                reduceFromCart={reduceFromCart}
                addToCart={addToCart}
                cart={cart}
              />
            </Route>
          </Switch>
        </Router>
      </Container>
    </ChakraProvider>
  );
}

export default App;
