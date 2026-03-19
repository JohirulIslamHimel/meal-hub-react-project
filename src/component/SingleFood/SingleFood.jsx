import React from "react";
import "./SingleFood.css";

const SingleFood = ({ food }) => {
  console.log(food);
  return (
    <div className="card">
      <img src={food.strMealThumb} alt="meal photo" />
      <h1>{food.strMeal}</h1>
      <button>Add to cart</button>
    </div>
  );
};

export default SingleFood;
