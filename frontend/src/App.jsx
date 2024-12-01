import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
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
    element: <Home />, loader: getThreeRecipes,  // Pass fetched data to Home component
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
