import React, { use } from "react";
import SingleFood from "../SingleFood/SingleFood";

const FoodSection = ({ foodDataRes }) => {
  //   console.log(foodDataRes);
  const data = use(foodDataRes);
  const foods = data.meals;
  console.log(foods);
  return (
    <div className="foods-container-parent">
      <div style={{ width: "75%" }} className="food-container">
        {foods.map((food) => (
          <SingleFood food={food}></SingleFood>
        ))}
      </div>
      <div style={{ backgroundColor: "cyan", width: "25%" }}>
        <h1>Cart</h1>
      </div>
    </div>
  );
};

export default FoodSection;
