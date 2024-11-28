import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Header Section */}
      <header className="header">
        <div className="logo">chef<span>IT</span></div>
        <nav>
          <a href="#recipes">Recipes</a>
          <a href="#add-recipe">Add Recipe</a>
        </nav>
        <div className="auth-buttons">
          <button className="login">Login</button>
          <button className="register">Register</button>
        </div>
      </header>

      {/* Hero Section */}
      <header className="header"></header>
      <div className="hero">
        <h1>chef<span>IT</span></h1>
        <div className="hero-background"></div>
      </div>

      {/* Top Rated Recipes Section */}
      <section className="top-rated">
        <h2>Top rated recipes</h2>
        <div className="recipes-grid">
          <div className="recipe">
            <h3>Supă la plic</h3>
            <p>★★★★☆</p>
            <p className="author">Author: Mari</p>
          </div>
          <div className="recipe">
            <h3>Plăcinte cu păstramă</h3>
            <p>★★★★★</p>
            <p className="author">Author: Gabriel</p>
          </div>
          <div className="recipe">
            <h3>Cartofi prăjiți</h3>
            <p>★★★☆☆</p>
            <p className="author">Author: Edi</p>
          </div>
        </div>
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