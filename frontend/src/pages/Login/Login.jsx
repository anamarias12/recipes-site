import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/login`, { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      
      // Redirect to Home page after successful login
      navigate('/');
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div>
      <form className='form' onSubmit={handleOnSubmit}>
        <div className='form-control'>
          <label>Email</label>
          <input 
            type="email" 
            className='input' 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className='form-control'>
          <label>Password</label>
          <input 
            type="password"
            className='input' 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type='submit'>Login</button>
        {error && <h6 className='error'>{error}</h6>}
        
        {/* Link to the Sign-Up page */}
        <p>
          Don't have an account?{" "}
          <Link to="/signUp">Create new account</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
