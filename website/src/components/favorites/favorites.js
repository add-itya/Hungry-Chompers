import React, {useEffect, useState} from 'react';
import './favorites.css';
import logo from '../icons/HungryChompersLogo.png';
import blankProfile from '../icons/BlankProfilePicture.png';
import Profile from '../icons/ProfilePicture.png';
import searchIcon from '../icons/search.svg';
import { useNavigate, useLocation } from 'react-router-dom';

function Contact(){

    const navigate = useNavigate();
    const [savedFoodIndexes, setSavedFoodIndexes] = useState([]);
    const [foods, setFoods] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const savedIndexesParam = queryParams.get('savedIndexes');
    const foodDataParam = queryParams.get('foodData');
    const savedIndexes = savedIndexesParam ? JSON.parse(decodeURIComponent(savedIndexesParam)) : [];
    const foodData = foodDataParam ? JSON.parse(decodeURIComponent(foodDataParam)) : [];

    useEffect(() => {
        setSavedFoodIndexes(savedIndexes);
        setFoods(foodData);
    }, [savedIndexes, foodData]);

    const FoodItem = ({ index, name, restaurant, ingredients, saved }) => (
        <div className="food-item">
          <h2>{name}</h2>
          <p>Restaurant: {restaurant}</p>
          <p>Ingredients: {ingredients.join(', ')}</p>
        </div>
      );


    const goToNewPage = page => {
        navigate(page);
    };

    const logout = () => {
        document.cookie = "signedin=false; path=/";
        window.location.reload();
    };

    let homepage = '/';
    let accountpage = '/account_creation';
    let aboutpage = '/about_us';
    let favoritepage = '/favorites';

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

      const signedIn = getCookie('signedin');

    return(

        <div className="page">

            <div className="HeaderBar">

                <div className = "Logo_Name">
                    <img onClick={() => goToNewPage(homepage)} className = "Logo" src={logo}/>
                    <p onClick={() => goToNewPage(homepage)} className = "Name">Hungry Chompers</p>
                </div>

                <div className = "HeaderButtonDiv">
                    <button className='HeaderButton' onClick={() => goToNewPage(homepage)} >Home</button>
                    <button className='HeaderButton' onClick={() => goToNewPage(aboutpage)}>About Us</button>
                    <button className='HeaderButton'onClick={() => goToNewPage(favoritepage)}>Favorites</button>
                    {(getCookie('signedin') === 'true') ? <button className='HeaderButton' onClick={logout}>Logout</button> : <></>}
                </div>

                <div className = "HeaderProfile">
                    {(getCookie('signedin') === 'true') ? <p className = "DisplayName">{getCookie("username")}</p> : <></>}
                    <img className='ProfilePicture' src={(getCookie('signedin') === 'true') ? Profile : blankProfile}/>
                </div>      
       
            </div>

            <div className="FavoriteContainer">

                {(getCookie('signedin') === 'true') ? 
                <h1 className="FavoriteTitle">Here are your favorites you stored to check now! Be careful, they will reset after leaving this page!</h1> : 
                <h1 className="FavoriteTitle">Please sign in to view your stored favorites!</h1>}


                <div className="food-list"> 
                    {foods.length > 0  && (
                    <div className = "food-column">
                    
                        {savedFoodIndexes.map((saved, index) => (
                            saved === 1 && (
                            <FoodItem
                                key={index}
                                name={foods[index].name}
                                restaurant={foods[index].restaurant}
                                ingredients={foods[index].ingredients}
                                saved={saved}
                            />
                            )
                        ))}
                    </div>
                    )}
                </div>
                
                
            </div>
            
      </div>
    )
}

    export default Contact;