import React, { useState } from 'react';
import './home_page.css';

function HomePage({ navigateToAccountPage, handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logging username and password (for educational/testing purposes only)
    console.log("Username:", email);
    console.log("Password:", password);
    // check if email is in the database and if the password matches
    var match = true;
    if (match === true) {
      // Call handleLogin function to set isLoggedIn state to true
      handleLogin();
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
          <button className='CreateAccountButton' onClick={navigateToAccountPage}>Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
