import React from 'react'
import "../styles/Checkout.scss"
const Checkout = ({ cart, addToCart, reduceFromCart, deleteFromCart }) => {
  return (
    <main>
      {cart.length === 0 ? <p>No items in cart.</p> : null}
      <ul className="items-list">
        {cart.map((item) => (
          <li key={item.id} className="item">
            <h2>{item.name}</h2>
            <div className="more-less">
              <button onClick={() => reduceFromCart(item.id)}>-</button>
              <p>{item.count}</p>
              <button onClick={() => addToCart(item)} >+</button>
            </div>
            <p>&#36;{item.count * item.price}</p>
            <button onClick={() => deleteFromCart(item.id)} >Remove from Cart</button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Checkout
