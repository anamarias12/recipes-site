import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import axios from "axios";

const getThreeRecipes = async () => {
  let recipes = [];
  await axios.get("http://localhost:8080/recipe/top3").then((response) => {
    recipes = response.data;
  })
  return recipes;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, loader: getThreeRecipes,
  },
  {
    path: "/signUp",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
