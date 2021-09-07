import React from "react";
import "../styles/Header.scss";
import { Link } from "react-router-dom";
import CartIcon from "../assets/images/cart-icon.svg";


const Header = ({ cart }) => {
  const cartTotal = (total, item) => total + item.count;
  return (
    <nav className="nav-bar">
      <Link className="nav-item" to="/">
        <h2>Furniture</h2>
      </Link>
      <Link className="nav-item" to="/checkout">
        <img className="cart-icon" src={CartIcon} alt="" />
        {cart.length ? cart.reduce(cartTotal, 0) : "0"}
      </Link>
    </nav>
  );
};

export default Header;
