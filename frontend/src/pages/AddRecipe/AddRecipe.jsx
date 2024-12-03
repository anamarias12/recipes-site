import React, { useState } from "react";
import axios from "axios";
import "./AddRecipe.css";

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to add a recipe!");
      return;
    }

    axios
      .post(
        "http://localhost:8080/recipe",
        { title, description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        alert("Recipe added successfully!");
        setTitle("");
        setDescription("");
      })
      .catch((error) => {
        console.error("Error adding recipe:", error);
        alert("Failed to add recipe. Please try again.");
      });
  };

  return (
    <div className="add-recipe-container">
      <h1>Add a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
