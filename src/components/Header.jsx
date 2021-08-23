import React from 'react';
import "../styles/Header.scss"
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi"

const Header = ({ cart }) => {
  const cartTotal = (total, item) => total + item.count
  return (
    <nav className="nav-bar">
      <Link className="nav-item" to="/">
        Home Logo
      </Link>
      <Link className="nav-item" to="/checkout">
        <FiShoppingCart />
        {cart.length ? cart.reduce(cartTotal, 0) : "0"}
      </Link>
    </nav>
  )
}

export default Header
