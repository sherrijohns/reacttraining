import { useState } from "react";
import { toast } from "react-toastify";
import { saveFood } from "./api/foodsApi";
import { Input } from "./shared/Input";
import { Select } from "./shared/Select";
import { useHistory } from "react-router-dom";

export type NewFood = {
  name: string;
  quantity: number;
  minQuantity: number;
  type: string;
};

const emptyFood: NewFood = {
  name: "",
  quantity: 0,
  minQuantity: 0,
  type: "",
};

export function FoodForm() {
  const [newFood, setNewFood] = useState<NewFood>(emptyFood);
  const history = useHistory();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await saveFood(newFood);
      //const mynewfood = await saveFood(newFood);
      //setFoods([...foods, mynewfood]);
      //   const _foods = await getFoods();
      //  setFoods(_foods);
      //  setNewFood(emptyFood);
      toast.success("Food saved! 🦄");
      history.push("/"); // redirect to home page
    } catch (error) {
      toast.error("Failed to add");
    }
  }
  // Implementing single onChange handler by convention.
  // id coorellates to the property in state.
  function onChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { value, id } = event.target;
    // Create a copy of existing state, but change the name property to the new value
    setNewFood({
      ...newFood,
      [id]: value,
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={onChange}
          id="name"
          label="Name"
          value={newFood.name}
        />
        <Input
          onChange={onChange}
          id="quantity"
          label="Quantity"
          type="number"
          value={newFood.quantity.toString()}
        />
        <Input
          onChange={onChange}
          id="minQuantity"
          label="Min Quantity"
          type="number"
          value={newFood.minQuantity.toString()}
        />
        <Select
          id="type"
          onChange={onChange}
          label="Type"
          placeholderOption="Select Type"
          value={newFood.type}
          options={[
            { label: "Vegetable", value: "Vegetable" },
            { label: "Grain", value: "Grain" },
            { label: "Fruit", value: "Fruit" },
            { label: "Nut", value: "Nut" },
            { label: "Junk Food", value: "Junk" },
            { label: "Drink", value: "Drink" },
          ]}
        />
        <br />
        <input className="btn btn-primary" type="submit" value="Save Food" />
      </form>
    </>
  );
}
