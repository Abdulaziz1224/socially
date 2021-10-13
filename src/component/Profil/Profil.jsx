import React, { useContext } from 'react';
import Navbar from "../Navbar/Navbar"
import Footer from "../Web design01/Footer/Footer"
import Device from './Device';
import MainSection, { Context } from './MainSection';

import "./profil.scss"

function Profil() {
     const {bool, setBool} = useContext(Context)
     return (
          <div className={bool ? "profil modalColor" : "profil"}>
               <Navbar/>
               <MainSection/>
               <Device/>
               <Footer/>
          </div>
     );
}

export default Profil;