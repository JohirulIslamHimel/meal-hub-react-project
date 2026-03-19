import React from "react";
import "./SingleFood.css";

const SingleFood = ({ food, addToCart }) => {
  console.log(food);
  return (
    <div className="card">
      <img src={food.strMealThumb} alt="meal photo" />
      <h1>{food.strMeal}</h1>
      <button onClick={() => addToCart(food)}>Add to cart</button>
    </div>
  );
};

export default SingleFood;
