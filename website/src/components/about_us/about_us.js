import React from 'react';
import './about_us.css';
import logo from '../icons/HungryChompersLogo.png';
import blankProfile from '../icons/BlankProfilePicture.png';
import Profile from '../icons/ProfilePicture.png';
import searchIcon from '../icons/search.svg';
import Neema from '../icons/neema.jpg';
import Shawn from '../icons/shawn.jpg';
import Chris from '../icons/chris.jpg';
import Aditya from '../icons/aditya.jpg';
import { useNavigate } from 'react-router-dom';

function AboutUs(){

    const navigate = useNavigate();

    const goToNewPage = page => {
        navigate(page);
    };

    let homepage = '/';
    let accountpage = '/account_creation';
    let aboutpage = '/about_us';
    let contactpage = '/contact';

    const signedIn = false;

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
                    <button className='HeaderButton' onClick={() => goToNewPage(contactpage)}>Contact</button>
                </div>

                <div className = "HeaderProfile">
                    <img className='ProfilePicture' src={signedIn ? Profile : blankProfile}/>
                </div>      
       
            </div>

            <div className="AboutContainer">

                <h1 className="AboutTitle">About Us</h1>

                <div class="PicContainer">

                    <div class="PicName">
                        <img className="DevPic" src = {Chris}/>
                        <p className="DevName">Christian</p>
                    </div>
                    
                    <div class="PicName">
                        <img className="DevPic" src = {Neema}/>
                        <p className="DevName">Neema</p>
                    </div>

                    <div class="PicName">
                        <img className="DevPic" src = {Shawn}/>
                        <p className="DevName">Shawn</p>
                    </div>

                    <div class="PicName">
                        <img className="DevPic" src = {Aditya}/>
                        <p className="DevName">Aditya</p>
                    </div>
                    
                    
                    
                </div>

                <p className="InfoText">Meet the developers of Hungry Chompers! <br></br> We are a group of students from the University of Florida
                   that developed this website as a school project for CEN3031. <br></br><br></br> Our goal was to increase day-to-day productivity and after
                   some discussion decided to improve upon <br></br>the thought-to-plate pipeline that many of us face: not knowing what to eat. <br></br><br></br> Just like that we came
                   up with the idea for HungryChompers and got to work. A lot of the data on the site is dummy data and serves only as a proof of concept.
                   Regardless, enjoy!</p>
            </div>

      </div>
    )
}

    export default AboutUs;