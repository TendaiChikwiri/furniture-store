import React from 'react';
import "../styles/Header.scss"
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi"

const Header = () => {
  return (
    <nav className="nav-bar">
      <Link className="nav-item" to="/">
        Home Logo
      </Link>
      <Link className="nav-item" to="/checkout">
        <h1>
          <FiShoppingCart />
        </h1>
      </Link>
    </nav>
  )
}

export default Header
