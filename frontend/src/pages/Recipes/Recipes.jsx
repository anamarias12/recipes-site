import React, { useState, useEffect } from "react";
import axios from "axios";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
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
    <div style={{ padding: "20px" }}>
      <h1>All Recipes</h1>
      {recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe._id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              {/* display the username of the creator */}
              <small>Created by: {recipe.creator ? recipe.creator.username : "Unknown"}</small>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes available.</p>
      )}
    </div>
  );
};

export default Recipes;
