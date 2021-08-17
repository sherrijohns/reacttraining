import React from "react";
import { useEffect, useState } from "react";
import { getFoods } from "./api/foodsApi";

type Food = {
  id: number;
  name: string;
  quantity: number;
  minquantity: number;
  category: string;
};

export function App() {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    async function callGetFoods() {
      const response = await getFoods();
      debugger;
      if (!response.ok) throw new Error("Call to getFoods failed");
      const json: Food[] = await response.json();
      setFoods(json);
    }
    callGetFoods();
  }, []);
  return (
    <>
      <h1>E-gineering Pantry Manager</h1>
      {/* example of a concise arrow function */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Min Qty</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food, index) => (
            <tr key={food.id}>
              <td>{food.name}</td>
              <td>{food.quantity}</td>
              <td>{food.category}</td>
              <td>{food.minquantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
