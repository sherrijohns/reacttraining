type Food = {
    name: string;
    quantity: number;
}

const foods: Food[] = [
{ name: "Carrot", quantity: 1},
{ name: "Potato", quantity: 2},
]

export function App() {

    function renderFoods() {

        // example of a concise arrow function
        return foods.map(food => <li>{food.name}</li>)
    };

     return (
     <>
        <h1>E-gineering Pantry Manager</h1>
        <ul>
         { renderFoods() }
        </ul>
    </>
    );
}



