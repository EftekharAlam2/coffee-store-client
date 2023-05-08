import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AddCoffe from "./AddCoffe";
import UpdateCoffee from "./UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/coffee"),
    children: [
      {
        path: "/addCoffee",
        element: <AddCoffe></AddCoffe>,
      },
      {
        path: "/updatedCoffee",
        element: <UpdateCoffee></UpdateCoffee>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
