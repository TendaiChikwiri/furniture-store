import React from 'react'
import "../styles/Checkout.scss";
import deleteIcon from "../assets/images/bin-icon.png"
const Checkout = ({ cart, addToCart, reduceFromCart, deleteFromCart }) => {
  return (
    <main>
      {cart.length === 0 ? <p className="empty-cart">No items in cart</p> : null}
      <div className="cart">
        <ul className="items-list">
          {cart.map((item) => (
            <li key={item.id} className="item">
              <div className="img-container">
                <img src={item.img} alt="" />
              </div>
              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <div className="more-less">
                  <button onClick={() => reduceFromCart(item.id)}>-</button>
                  <p>{item.count}</p>
                  <button onClick={() => addToCart(item)} >+</button>
                </div>
                <p>&#36;{item.count * item.price}</p>
                <button className="delete-btn" onClick={() => deleteFromCart(item.id)} ><img src={deleteIcon} alt="" /></button>
              </div>
            </li>
          ))}
        </ul>
        <div className="total">

        </div>
      </div>
    </main>
  )
}

export default Checkout
