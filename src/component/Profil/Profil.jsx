import React from 'react';
import Navbar from "../Navbar/Navbar"
import Footer from "../Web design01/Footer/Footer"
import Device from './Device';
import MainSection from './MainSection';
import "./profil.scss"

function Profil() {
     return (
          <div className="profil">
               <Navbar/>
               <MainSection/>
               <Device/>
               <Footer/>
          </div>
     );
}

export default Profil;