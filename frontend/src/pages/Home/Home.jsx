import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Top3Recipes from "../../components/Top3Recipes";

const Home = ({ recipes }) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogin(!!token);
  }, []);

  return (
    <div className="home">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          chef<span>IT</span>
        </div>
        <nav>
          <Link to="/recipes">Recipes</Link>
          <Link to={isLogin ? "/addRecipe" : "/login"}>Add Recipe</Link>
        </nav>
        <div className="auth-buttons">
          {isLogin ? (
            <Link to="/profile">
              <button className="profile">Profile</button>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <button className="login">Login</button>
              </Link>
              <Link to="/signUp">
                <button className="register">Register</button>
              </Link>
            </>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <div className="hero">
        <h1>
          chef<span>IT</span>
        </h1>
        <div className="hero-background"></div>
      </div>

      {/* Top Rated Recipes Section */}
      <section className="top-rated">
        <h2>Top rated recipes</h2>
        <Top3Recipes recipes={recipes} />
      </section>

      {/* Contact Section */}
      <section className="contact-us">
        <h2>Contact us</h2>
        <form className="contact-form">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 chefIT</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
