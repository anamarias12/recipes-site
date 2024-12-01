import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Top3Recipes() {
  const recipes = useLoaderData();
  console.log(recipes);

  return (
    <div className="card-container">
      {recipes?.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe._id} className="card">
            <div className="card-body">
              <div className="card-title">{recipe.title}</div>
              <p className="card-description">{recipe.description}</p>
              <div className="card-rating">Rating: {recipe.rating}</div>
            </div>
          </div>
        ))
      ) : (
        <p>No recipes available.</p>
      )}
    </div>
  );
}
