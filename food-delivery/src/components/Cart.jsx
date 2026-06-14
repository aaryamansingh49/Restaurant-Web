import React, { useState, useEffect } from 'react';
import '../styles/cart.css';

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  // Function to calculate the total price of items in the cart
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  // Function to remove an item from the cart by its id
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]); // Update price whenever cart changes

  return (
    <article>
      {cart.length === 0 ? ( // Check if the cart is empty
    //   <a href=
        <div className="empty-cart-message">
          <h2>Your cart is empty!</h2>
          <p>Add some items to get started.</p>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart_box" key={item.id}>
              <div className="cart_img">
                <img src={item.img} alt={item.title} />
                <p>{item.title}</p>
              </div>
              <div>
                <button onClick={() => handleChange(item, -1)}> - </button>
                <button>{item.amount}</button>
                <button onClick={() => handleChange(item, +1)}> + </button>
              </div>
              <div>
                <span>{item.price}</span>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="total">
            <span>Total Price of your Cart</span>
            <span>Rs - {price}</span>
          </div>
        </>
      )}
    </article>
  );
};

export default Cart;
