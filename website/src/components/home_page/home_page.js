import React from 'react';
import './home_page.css';
import logo from '../icons/HungryChompersLogo.png';
import blankProfile from '../icons/BlankProfilePicture.png';
import Profile from '../icons/ProfilePicture.png';
import searchIcon from '../icons/search.svg';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const handleCreateAccount = () => {
    // Logic to switch to account creation page
  };

  const navigate = useNavigate();

  const goToNewPage = page => {
    navigate(page);
  };

  let homepage = '/';
  let accountpage = '/account_creation';

  // Replace this If statement with a condition checking if the user has signed in already
  if (false){
    return (
      <p>Fuck you</p>
    )
}
else{
  return (
    <div className="page">

      <div className="HeaderBar">

        <div className = "Logo_Name">
          <img className = "Logo" src={logo}/>
          <p className = "Name">Hungry Chompers</p>
        </div>

        <div className = "HeaderButtonDiv">
          <button className='HeaderButton'>Home</button>
          <button className='HeaderButton'>About Us</button>
          <button className='HeaderButton'>Contact</button>
        </div>

        <div className = "HeaderProfile">
          <img className='ProfilePicture' src={blankProfile}/>
        </div>      
       
      </div>

      <div className="HomeContainer">

        <div className='InfoBar' >
          <h1 class='SiteText'>Welcome to Hungry Chompers!</h1>
          <h2 class ='SiteText'> Ever felt like eating a certain type of food but had no idea where to get it? <br></br> <br></br> Well despair no longer, with
              our vast database we can show you the best matches for your cravings, tried and tested by other Hungry Chompers in the local Gainesville area! <br></br>
              <br></br> Just Sign In to get started, don't have an account? <br></br><br></br> No problem! <br></br><br></br> Take a quick trip to our account creation
              page to join the swamp and start feasting!</h2>
        </div>

        <div className="LoginWrapper">
          <div className='WelcomeText'>

            {/* <input class = "search-bar" type="text" placeholder="Search"/>
            <button class = "search-button">
              <img class = "search-icon" src = {searchIcon}/>
            </button> */}
          </div>

          <div className='SignIn'>
            <h2 text-align='left' className="SiteText2">Sign In</h2>
            <form id='SignInInfo' class='SignInForm'>

              <div className="InfoEntry">
                <label class='SignInLabel'> Email </label>
                <input type="text" name="email" class='SignInInput'/>
              </div>
              
              <div className="InfoEntry">
                <label class='SignInLabel'> Password </label>
                <input type="password" name="password" class='SignInInput'/>
              </div>
              
              <div className="FormButtons">
                <input type ="submit" className='SubmitButton' value='Sign In'/>
                <button onClick={() => goToNewPage(accountpage)} className='CreateAccountButton'>Sign Up</button>
              </div>
              
      
            </form>
          </div>

        </div>
      
      </div>
    </div>
  );
}
}

export default HomePage;
