import React, { use, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import SingleFood from "../SingleFood/SingleFood";
import Cart from "../Cart/Cart";

const FoodSection = ({ foodDataRes }) => {
  //   console.log(foodDataRes);
  const data = use(foodDataRes);
  const foods = data.meals;
  //   console.log(foods);
  const [cart, setCart] = useState([]);
  const addToCart = (foodData) => {
    // console.log(foodData);
    setCart([...cart, foodData]);
  };
  const handleOrder = () => {
    setCart([]);
    toast("Order Completed!");
  };
  return (
    <div className="foods-container-parent">
      <div style={{ width: "75%" }} className="food-container">
        {foods.map((food) => (
          <SingleFood addToCart={addToCart} food={food}></SingleFood>
        ))}
      </div>
      <div style={{ backgroundColor: "cyan", width: "25%" }}>
        <h1>Cart</h1>
        <Cart cart={cart}></Cart>
        <button onClick={handleOrder}>Order</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FoodSection;
