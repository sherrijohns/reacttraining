import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getFood, saveFood, updateFood } from "./api/foodsApi";
import { Input } from "./shared/Input";
import { Select } from "./shared/Select";
import { useHistory, useParams } from "react-router-dom";

export type CurrentFood = {
  name: string;
  quantity: number;
  minQuantity: number;
  type: string;
};

const emptyFood: CurrentFood = {
  name: "",
  quantity: 0,
  minQuantity: 0,
  type: "",
};

export function FoodForm() {
  const [currentFood, setCurrentFood] = useState<CurrentFood>(emptyFood);
  const history = useHistory();
  const { foodId } = useParams() as any;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      foodId
        ? await updateFood({ ...currentFood, id: foodId })
        : await saveFood(currentFood);

      toast.success("Food saved! 🦄");
      history.push("/"); // redirect to home page
    } catch (error) {
      toast.error("Failed to add");
    }
  }

  useEffect(() => {
    async function fetchFood() {
      try {
        const food = await getFood(foodId);
        setCurrentFood({
          name: food.name,
          minQuantity: food.minQuantity,
          quantity: food.quantity,
          type: food.type,
        });
      } catch (error) {
        toast.error("Failed to retrieve food");
      }
    }
    fetchFood();
    // Using empty array for useEffect dependency array since we only want this to run once.
  }, []);

  // Implementing single onChange handler by convention.
  // id coorellates to the property in state.
  function onChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { value, id } = event.target;
    // Create a copy of existing state, but change the name property to the new value
    setCurrentFood({
      ...currentFood,
      [id]: value,
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>{foodId ? "Edit" : "Add New"} Food</h3>
        <Input
          onChange={onChange}
          id="name"
          label="Name"
          value={currentFood.name}
        />
        <Input
          onChange={onChange}
          id="quantity"
          label="Quantity"
          type="number"
          value={currentFood.quantity.toString()}
        />
        <Input
          onChange={onChange}
          id="minQuantity"
          label="Min Quantity"
          type="number"
          value={currentFood.minQuantity.toString()}
        />
        <Select
          id="type"
          onChange={onChange}
          label="Type"
          placeholderOption="Select Type"
          value={currentFood.type}
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
