import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logoImage from "../assets/Group 89.png";

const Navbar = ({ isLogin }) => {
  const navigate = useNavigate();

  const handleAddRecipeClick = (e) => {
    if (!isLogin) {
      e.preventDefault();
      alert("You must be logged in to add a recipe!");
    }
  };

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logoImage} alt="Logo" className="logo-image" /> {/* Use the image */}
        </Link>
      </div>
      <nav>
        <Link to="/recipes">Recipes</Link>
        <Link to={isLogin ? "/addRecipe" : "#"} onClick={handleAddRecipeClick}>
          Add Recipe
        </Link>
      </nav>
      <div className="auth-buttons">
        {isLogin ? (
          <Link to="/profile">
            <button className="profile-button">Profile</button>
          </Link>
        ) : (
          <>
            <Link to="/login">
              <button className="login-button">Login</button>
            </Link>
            <Link to="/signUp">
              <button className="register-button">Register</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
