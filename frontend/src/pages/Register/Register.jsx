import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('http://localhost:8080/signUp', { email, password, username });
      
      // Navigate to Login page after successful sign-up
      navigate('/login');
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div>
      <form className='form' onSubmit={handleOnSubmit}>
        <div className='form-control'>
          <label>Username</label>
          <input 
            type="text" 
            className='input' 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
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
        <button type='submit'>Sign Up</button>
        {error && <h6 className='error'>{error}</h6>}

        {/* Link to the Login page */}
        <p>
          Already have an account?{" "}
          <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
