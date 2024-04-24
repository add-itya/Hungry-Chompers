import React, { useState } from 'react';
import './home_page.css';
import logo from '../icons/HungryChompersLogo.png';
import blankProfile from '../icons/BlankProfilePicture.png';
import Profile from '../icons/ProfilePicture.png';
import searchIcon from '../icons/search.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FoodItem = ({ name, restaurant, ingredients, cuisine }) => (
  <div className="food-item">
    <h2>{name}</h2>
    <p>Restaurant: {restaurant}</p>
    <p>Ingredients: {ingredients.join(', ')}</p>
  </div>
);

function HomePage(){
  const [signedIn, setSignedIn] = useState(false);
  const [allfoods, setallfoods] = useState([]);
  const [foods, setFoods] = useState([]);
  const [sliceIndex, setsliceIndex] = useState(0);
  const [cuisine, setcuisine] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch('http://localhost:5000/food');
        const data = await response.json();
        setallfoods(data);
        setFoods(data);
        setsliceIndex(Math.ceil(data.length / 2));
      } catch (error) {
        console.error('Error fetching foods:', error);
      }
    };

    fetchFoods();
  }, []);
  

  const handleCuisineChange = (e) => {
    const selectedCuisine = e.target.value;
    setcuisine(selectedCuisine);
    // set foods to elements in allfoods that match the selected cuisine value    
    setFoods(selectedCuisine ? allfoods.filter(food => food.cuisine === selectedCuisine): [allfoods]);

  };
  const handleSignIn = () => {
    setSignedIn(true);
  };

  const goToNewPage = page => {
    navigate(page);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log('Username:', email);
    console.log('Password:', password);
    console.log('Clicked');
  
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const responseData = await response.text();
      console.log(responseData);
  
      const data = JSON.parse(responseData);
      if (response.ok) {
        setSignedIn(true);
        console.log(data.message);
      } else {
        alert("invalid email or password")
        console.error(data.message);
      }
    } catch (error) {
      console.error('Something went wrong:', error);
    }
  };
  
  

  let homepage = '/';
  let accountpage = '/account_creation';
  let mainpage = '/main';
  let aboutpage = '/about_us';
  let contactpage = '/contact';


  // Replace this If statement with a condition checking if the user has signed in already
  if (signedIn){
    return (
      <div className="page">

      <div className="HeaderBar">

        <div className = "Logo_Name">
          <img onClick={() => goToNewPage(homepage)} className = "Logo" src={logo}/>
          <p onClick={() => goToNewPage(homepage)} className = "Name">Hungry Chompers</p>
        </div>

        <div className = "HeaderButtonDiv">
          <button className='HeaderButton' onClick={() => goToNewPage(homepage)} >Home</button>
          <button className='HeaderButton' onClick={() => goToNewPage(aboutpage)}>About Us</button>
          <button className='HeaderButton' onClick={() => goToNewPage(contactpage)}>Contact</button>
        </div>

        <div className = "HeaderProfile">
          <img className='ProfilePicture' src={Profile}/>
        </div>      
       
      </div>

      <div className="HomeContainer2">
        <div className='LoggedInBar' >
          <h1 class='SiteText'>Logged in!</h1>
          <h2 class ='SiteText'>Scroll through the selection of local foods and select by cuisine to explore new foods
          or find foods you already love!</h2>
        </div>
        <select class='CuisineDropdown' onChange={handleCuisineChange}>
          <option hidden disabled selected value> Choose </option>
          <option value="Mexican">Mexican</option>
          <option value="Italian">Italian</option>
          <option value="American">American</option>
          <option value="Chinese">Chinese</option>
        </select>
        <h1>{cuisine}</h1>
        <div className="food-list">
          <div className="food-column">
            {foods.slice(0, sliceIndex).map((food, index) => (
              <FoodItem
                key={index}
                name={food.name}
                restaurant={food.restaurant}
                ingredients={food.ingredients}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    )
}
else{
  return (
    <div className="page">

      <div className="HeaderBar">

        <div className = "Logo_Name">
          <img onClick={() => goToNewPage(homepage)} className = "Logo" src={logo}/>
          <p onClick={() => goToNewPage(homepage)} className = "Name">Hungry Chompers</p>
        </div>

        <div className = "HeaderButtonDiv">
          <button className='HeaderButton' onClick={() => goToNewPage(homepage)} >Home</button>
          <button className='HeaderButton' onClick={() => goToNewPage(aboutpage)}>About Us</button>
          <button className='HeaderButton' onClick={() => goToNewPage(contactpage)}>Contact</button>
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
              <br></br> Just Sign In to get started, don't have an account? <br></br><br></br> No problem! It's so easy even a Nole can do it! <br></br><br></br> Take a quick trip to our account creation
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
            <form id='SignInInfo' class='SignInForm' onSubmit={handleSubmit}>

              <div className="InfoEntry">
                <label class='SignInLabel'> Email </label>
                <input type="text" name="email" class='SignInInput'/>
              </div>
              
              <div className="InfoEntry">
                <label class='SignInLabel'> Password </label>
                <input type="password" name="password" class='SignInInput'/>
              </div>
              
              <div className="FormButtons">
                <button type ="submit" className='SubmitButton' onClick={handleSignIn}> Sign In </button>
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
