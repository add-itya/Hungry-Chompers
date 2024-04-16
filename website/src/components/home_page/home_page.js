import React, { useState } from 'react';
import './home_page.css';

function HomePage({ navigateToAccountPage, handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (data.success) {
        // Call handleLogin function to set isLoggedIn state to true
        handleLogin();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong');
    }
  };
  

  return (
    <div className="container">
      <div className='WelcomeText'>
        <h1>Welcome to Hungry Chompers</h1>
        <p>Please sign in or create an account below.</p>
      </div>
      <div className='SignIn'>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button className='SubmitButton' type="submit">Submit</button>
          <p></p>
        </form>
        <h2>Create Account</h2>
        <button className='CreateAccountButton' onClick={navigateToAccountPage}>Account Creation Page</button>
      </div>
    </div>
  );
}

export default HomePage;
