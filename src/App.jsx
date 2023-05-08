import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { useLoaderData } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import CoffeeData from "./CoffeeData";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  console.log(coffees);
  return (
    <div>
      <Link to="/addCoffee">Add Coffee</Link>
      <Link to="/updatedCoffee">Update Coffee</Link>
      <Outlet></Outlet>
      <div className="grid md:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <CoffeeData
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeData>
        ))}
      </div>
    </div>
  );
}

export default App;
