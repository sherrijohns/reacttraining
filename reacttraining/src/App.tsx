type Food = {
  id: number;
  name: string;
  quantity: number;
  minquantity: number;
  category: string;
};

const foods: Food[] = [
  {
    id: 1,
    name: "Carrot",
    quantity: 10,
    minquantity: 5,
    category: "Vegetable",
  },
  {
    id: 2,
    name: "Potato",
    quantity: 20,
    minquantity: 10,
    category: "Vegetable",
  },
  {
    id: 3,
    name: "Rice Krispy",
    quantity: 12,
    minquantity: 2,
    category: "Snack",
  },
];

export function App() {
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
