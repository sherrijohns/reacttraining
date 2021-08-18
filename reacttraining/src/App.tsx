import React from "react";
import { useEffect, useState } from "react";
import { getFoods } from "./api/foodsApi";
import { Input } from "./shared/input";
import { Select } from "./shared/select";

type Food = {
  id: number;
  name: string;
  quantity: number;
  minquantity: number;
  category: string;
};
const categoryoptions = [
  {
    value: "1",
    label: "Vegetable",
  },
  {
    value: "2",
    label: "Grain",
  },
  {
    value: "3",
    label: "Fruit",
  },
  {
    value: "4",
    label: "Snack",
  },
];

export function App() {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    async function callGetFoods() {
      const response = await getFoods();
      if (!response.ok) throw new Error("Call to getFoods failed");
      const json: Food[] = await response.json();
      setFoods(json);
    }
    callGetFoods();
    // Using empty array for useEffect since we only want this to run once
  }, []);
  return (
    <>
      <h1>E-gineering Pantry Manager</h1>
      <form>
        <h3>Add New Pantry Item</h3>
        <Input id="name" label="Name" />
        <Input id="quantity" label="Quantity" />
        <Input id="minquantity" label="Min Qty" />
        <Select
          id="category"
          label="Category"
          options={categoryoptions}
          placeholder="Select Type"
        />
      </form>
      <br />
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Min Qty</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food, index) => (
            <tr key={food.id}>
              <td>
                <button onClick={() => alert("clicked")}>Delete</button>
              </td>
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
