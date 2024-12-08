import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar"
import "./Recipes.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
  
    const token = localStorage.getItem("token");
    setIsLogin(!!token);

    axios
      .get("http://localhost:8080/recipe")
      .then((response) => {
        setRecipes(response.data);
        setFilteredRecipes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term)
    );
    setFilteredRecipes(filtered);
  };

  return (
    <div className="recipes-page">
      {/* Pass isLogin to Navbar */}
      <Navbar isLogin={isLogin} />
      {/* Recipes Content */}
      <div className="recipes-container">
        <h1>All Recipes</h1>
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        {/* Recipes Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="recipes-grid">
            {filteredRecipes.map((recipe) => (
              <div className="recipe-card" key={recipe._id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default Recipes;
