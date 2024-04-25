import React, { useState } from 'react';
import './home_page.css';
import logo from '../icons/HungryChompersLogo.png';
import blankProfile from '../icons/BlankProfilePicture.png';
import Profile from '../icons/ProfilePicture.png';
import blankBookmark from '../icons/NoBookmark.png';
import Bookmark from '../icons/Bookmark.png';
import searchIcon from '../icons/search.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function HomePage(){
  const [allfoods, setallfoods] = useState([]);
  const [foods, setFoods] = useState([]);
  const [cuisine, setcuisine] = useState("");
  const navigate = useNavigate();
  const [slice, setSlice] = useState(2);
  const [savedFoodIndexes, setSavedFoodIndexes] = useState(new Array(16).fill(-1));
  // const savedFoodIndexes = new Array(16).fill(-1);

  const FoodItem = ({ index, name, restaurant, ingredients, saved }) => (
    <div className="food-item">
      <h2>{name}</h2>
      <p>Restaurant: {restaurant}</p>
      <p>Ingredients: {ingredients.join(', ')}</p>
      <div className="Bookmark">
        <img className="BookmarkImg" src={(saved === 1) ? Bookmark: blankBookmark} onClick={() => SaveFood(saved, index)} />
        </div>
    </div>
  );

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch('http://localhost:5000/food');
        const data = await response.json();
        setallfoods(data);
        setFoods(data);
        setSlice(Math.floor(data.length / 2));
        console.log("slice is ");
        console.log(slice);
      } catch (error) {
        console.error('Error fetching foods:', error);
      }
    };

    fetchFoods();
  }, []);
  

  function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

  const SaveFood = (saved, index) => {
    console.log('Index:', index);
    console.log('Foods:', allfoods);
    console.log('Saved Foods:', savedFoodIndexes);
    const updatedIndexes = [...savedFoodIndexes]; // Create a copy of the state array
    updatedIndexes[index] = -updatedIndexes[index]; // Update the value
    setSavedFoodIndexes(updatedIndexes); // Update the state
  }

  const handleCuisineChange = (e) => {
    const selectedCuisine = e.target.value;
    setcuisine(selectedCuisine);
    setFoods(selectedCuisine ? allfoods.filter(food => food.cuisine === selectedCuisine): [allfoods]);
    setSlice(2);

  };

  const goToNewPage = page => {
    navigate(page);
  };

  const goToFavoritesPage = () => {
    const savedIndexes = encodeURIComponent(JSON.stringify(savedFoodIndexes));
    const foodData = encodeURIComponent(JSON.stringify(foods)); // Assuming foods contains all food items
    navigate(`/favorites?savedIndexes=${savedIndexes}&foodData=${foodData}`);
  };

  const logout = () => {
    document.cookie = "signedin=false; path=/";
    window.location.reload();
  }

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
        document.cookie = "signedin=true; path=/";
        window.location.reload();
        console.log(data.message);
      } else {
        alert("Invalid Email or Password")
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
  let favoritepage = '/favorites';


  // Replace this If statement with a condition checking if the user has signed in already
  if (getCookie('signedin') === 'true'){
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
          <button className='HeaderButton' onClick={() => goToFavoritesPage()}>Favorites</button>
          <button className='HeaderButton' onClick={logout}>Logout</button>
        </div>

        <div className = "HeaderProfile">
          <p className = "DisplayName">{getCookie("username")}</p>
          <img className='ProfilePicture' src={Profile}/>
        </div>      
       
      </div>

      <div className="HomeContainer2">
        <div className='LoggedInBar' >
          <h1 class='SiteText'>Welcome to Hungry Chompers {getCookie("username")}!</h1>
          <h2 class ='SiteText'>Scroll through the selection of local foods and save those that you find interesting to look at later!</h2>
        </div>

        <select class='CuisineDropdown2' onChange={handleCuisineChange}>
          <option hidden disabled selected value> Choose </option>
          <option value="Mexican">Mexican</option>
          <option value="Italian">Italian</option>
          <option value="American">American</option>
          <option value="Chinese">Chinese</option>
        </select>

        <div className="food-list">
          <div className="food-column">
            {foods.slice(0, slice).map((food, index) => (
              <FoodItem
                index={index}
                name={food.name}
                restaurant={food.restaurant}
                ingredients={food.ingredients}
                saved = {savedFoodIndexes[index]}
              />
            ))}
          </div>

          <div className="food-column">
            {foods.slice(slice).map((food, index) => (
              <FoodItem
                index={index + slice}
                name={food.name}
                restaurant={food.restaurant}
                ingredients={food.ingredients}
                saved = {savedFoodIndexes[index + slice]}
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
          <button className='HeaderButton' onClick={() => goToNewPage(favoritepage)}>Favorites</button>
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
                <button type ="submit" className='SubmitButton'> Sign In </button>
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
