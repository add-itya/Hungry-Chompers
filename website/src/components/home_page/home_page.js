import React from 'react';
import './home_page.css';
import logo from '../icons/HungryChompersLogo.png';
import blankProfile from '../icons/BlankProfilePicture.png';
import Profile from '../icons/ProfilePicture.png';
import searchIcon from '../icons/search.svg';
import { useNavigate } from 'react-router-dom';

const foods = [
  {
    name: 'Pizza',
    restaurant: 'Pizza Palace',
    ingredients: ['Dough', 'Tomato Sauce', 'Cheese', 'Toppings'],
  },
  {
    name: 'Burger',
    restaurant: 'Burger Joint',
    ingredients: ['Bun', 'Beef Patty', 'Lettuce', 'Tomato', 'Onion'],
  },
  {
    name: 'Sushi',
    restaurant: 'Sushi Bar',
    ingredients: ['Rice', 'Fish', 'Seaweed', 'Vegetables'],
  },
  {
    name: 'Tacos',
    restaurant: 'Taco Truck',
    ingredients: ['Tortillas', 'Beef', 'Lettuce', 'Tomato', 'Cheese'],
  },
];

const FoodItem = ({ name, restaurant, ingredients }) => (
  <div className="food-item">
    <h2>{name}</h2>
    <p>Restaurant: {restaurant}</p>
    <p>Ingredients: {ingredients.join(', ')}</p>
  </div>
);

const signedIn = false;


function HomePage(){
  const sliceIndex = Math.ceil(foods.length / 2);
  const navigate = useNavigate();

  const goToNewPage = page => {
    navigate(page);
  };

  let homepage = '/';
  let accountpage = '/account_creation';
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
          <div className="food-column">
            {foods.slice(sliceIndex).map((food, index) => (
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
