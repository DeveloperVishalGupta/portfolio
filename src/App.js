import React from "react";

// import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import component 
import Home from './components/Home.js';
import Header from './components/Header.js';
import ServicesPage from "./components/ServicesPage";
import MyFortfolio from "./components/MyPortfolio";
import Resume from "./components/Resume";

// import images 
import greenStrip from './images/greenStrip.png';
import VishalGupta from './images/vishalGupta.png';
import webDev from './images/webdevelopemnet.jpg';
import webdev2 from './images/Development.webp';
import websiteSS1 from './images/ss/AllProducts.png';
import websiteSS2 from './images/ss/Ecommerce.png';
import websiteSS3 from './images/ss/Educational.png';
import websiteSS4 from './images/ss/Login.png';
import resumeImage from './images/resumeAnime.png'

// import icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsisVertical, faMagnifyingGlass, faCartShopping, faLaptopCode, faPencilSquare,faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {faInstagram, faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

function App() {
    return (
        <>
            <Header moreMenu={faEllipsisVertical} search={faMagnifyingGlass} cart={faCartShopping}/>
            <Home greenStrip={greenStrip} VG={VishalGupta} circelCheck={faCircleCheck}  intsaIcon={faInstagram} Github={faGithub} linkedIn={faLinkedinIn} ></Home>
            <ServicesPage webdev={webDev} webdev2={webdev2} codeIcon={faLaptopCode} pencilIcon={faPencilSquare} />
            <MyFortfolio ss1={websiteSS1} ss2={websiteSS2} ss3={websiteSS3} ss4={websiteSS4}/>
            <Resume resumeImage={resumeImage}/>
        </>
    );
}

export default App;
