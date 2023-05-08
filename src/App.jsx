import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Link to="/addCoffee">Add Coffee</Link>
      <Link to="/updatedCoffee">Update Coffee</Link>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
