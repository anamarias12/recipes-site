import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import AddRecipe from "./pages/AddRecipe/AddRecipe";
import Recipes from "./pages/Recipes/Recipes";
import axios from "axios";

const isAuthenticated = () => localStorage.getItem("token") !== null;

const getThreeRecipes = async () => {
  let recipes = [];
  await axios.get("http://localhost:8080/recipe/top3").then((response) => {
    recipes = response.data;
  })
  return recipes;
};

const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
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
  },
  {
    path: "/profile",
    element: <ProtectedRoute element={<Profile />} />,
  },
  {
    path: "/addRecipe",
    element: <ProtectedRoute element={<AddRecipe />} />,
  },
  {
    path: "/recipes",
    element: <Recipes />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
