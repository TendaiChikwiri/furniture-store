import React from 'react'

const Checkout = ({ cart, addToCart, removeFromCart }) => {
  return (
    <main>
      {cart.length === 0 ? <p>No items in cart.</p> : null}
      <ul className="items-list">
        {cart.map((item) => (
          <li key={item.id} className="item">
            <h2>{item.name}</h2>
            <div>
              <button onClick={() => removeFromCart(item.id)}>minus</button>
              <p>{item.count}</p>
              <button onClick={() => addToCart(item)} >plus</button>
            </div>
            <p>&#36;{item.count * item.price}</p>
          </li>
        ))}

      </ul>
    </main>
  )
}

export default Checkout
