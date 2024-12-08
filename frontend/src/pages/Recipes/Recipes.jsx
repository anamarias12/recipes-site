import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar"; // Import Navbar component
import "./Recipes.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    // Check login status by checking if a token exists in localStorage
    const token = localStorage.getItem("token");
    setIsLogin(!!token); // Set isLogin to true if token exists

    // Fetch recipes
    axios
      .get("http://localhost:8080/recipe")
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  return (
    <div className="recipes-page">
      {/* Pass isLogin to Navbar */}
      <Navbar isLogin={isLogin} />

      {/* Recipes Content */}
      <div className="recipes-container">
        <h1>All Recipes</h1>
        {recipes.length > 0 ? (
          <div className="recipes-grid">
            {recipes.map((recipe) => (
              <div className="recipe-card" key={recipe._id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No recipes available.</p>
        )}
      </div>
    </div>
  );
};

export default Recipes;
