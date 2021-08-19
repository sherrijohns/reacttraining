import React, { useEffect, useState } from "react";
import { getFoods, deleteFood } from "./api/foodsApi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export type Food = {
  id: number;
  name: string;
  quantity: number;
  minQuantity: number;
  type: string;
};

export function App() {
  const [foods, setFoods] = useState<Food[]>([]);

  // Long form of the above that avoids using array destructuring.
  // const foodStateArray = useState<Food[]>([]);
  // const foods = foodStateArray[0];
  // const setFoods = foodStateArray[1];

  useEffect(() => {
    async function callGetFoods() {
      // Using underscore to avoid naming conflict
      const _foods = await getFoods();
      setFoods(_foods);
    }
    callGetFoods();
    // Using empty array for useEffect since we only want this to run once.
  }, []);

  return (
    <>
      <h1>E-gineering Pantry Manager</h1>
      <ToastContainer />
      <div>
        <Link className="btn btn-secondary" to="/foodform">
          New Food
        </Link>
      </div>

      {/* Exercise 1: Create a reusable Select and consume it below for Food Type 

        1. Vegetable
        2. Grain
        3. Fruit
      */}

      <table className="table table-striped table-bordered table-sm">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Min Quantity</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food) => (
            <tr key={food.id}>
              <td>
                <button
                  onClick={async () => {
                    await deleteFood(food.id);
                    // Return a new array with the id that was just deleted omitted.
                    const newFoods = foods.filter((f) => f.id !== food.id);
                    setFoods(newFoods);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to={"/foodform/" + food.id}>{food.name}</Link>
              </td>
              <td
                className={
                  food.quantity < food.minQuantity ? "text-danger fw-bold" : ""
                }
              >
                {food.quantity}
              </td>
              <td> {food.minQuantity}</td>
              <td>{food.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
