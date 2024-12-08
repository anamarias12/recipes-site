import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
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
      {/* Navbar */}
      <Navbar isLogin={isLogin} />

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
        </div>
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
          <div className="form-left">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-right">
            <textarea placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </div>
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
