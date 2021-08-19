import { CurrentFood } from "../FoodForm";
import { Food } from "../Home";

//const baseUrl = "http://localhost:3001/";
const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getFoods() {
  //const response = await fetch(baseUrl + "foods");
  const response = await fetch("http://localhost:3001/foods");
  if (!response.ok) throw new Error("Call to get foods failed");
  return response.json() as Promise<Food[]>;
}

export async function deleteFood(id: number) {
  const response = await fetch("http://localhost:3001/foods/" + id, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Delete failed");
  return response.json();
}

export async function getFood(id: number) {
  const response = await fetch("http://localhost:3001/foods/" + id, {
    method: "GET",
  });
  if (!response.ok) throw new Error("Get failed");
  return response.json() as Promise<Food>;
}

export async function saveFood(food: CurrentFood) {
  const response = await fetch("http://localhost:3001/foods/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(food),
  });
  if (!response.ok) throw new Error("Save failed");
  return response.json() as Promise<Food>;
}

export async function updateFood(food: Food) {
  const response = await fetch("http://localhost:3001/foods/" + food.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(food),
  });
  if (!response.ok) throw new Error("Update failed");
  return response.json() as Promise<Food>;
}
