import { Suspense } from "react";
import "./App.css";
import FoodSection from "./component/FoodSection/FoodSection";

import Navbar from "./component/Navbar/Navbar";

const foodDataRes = fetch(
  "https://www.themealdb.com/api/json/v1/1/search.php?f=a",
).then((res) => res.json());

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<p>Loading...</p>}>
        <FoodSection foodDataRes={foodDataRes}></FoodSection>
      </Suspense>
    </>
  );
}

export default App;
