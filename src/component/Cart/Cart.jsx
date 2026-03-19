import React from "react";

const Cart = ({ cart }) => {
  //   console.log(cart);
  return (
    <div className="cart-design">
      {cart.map((c) => (
        <h1>{c.strMeal}</h1>
      ))}
    </div>
  );
};

export default Cart;
