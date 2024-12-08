import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Top3Recipes() {
  const recipes = useLoaderData();
  console.log(recipes);

  return (
    <div className="recipes-grid">
      {recipes.map((recipe) => (
        <div className="recipe-card" key={recipe._id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <p className="rating">Rating: {recipe.rating}</p>
        </div>
      ))}
    </div>
  );
}
