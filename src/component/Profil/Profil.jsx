import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Web design01/Footer/Footer";
import Device from "./Device";
import MainSection from "./MainSection";
import Modal from "./Modal";
import "./profil.scss";

export const Context = React.createContext();
function Profil() {
  const [bool, setBool] = useState(false);
  return (
    <div className={bool ? "profil modalColor" : "profil"}>
      <Context.Provider value={{ bool, setBool }}>
        <Modal />
        <Navbar />
        <MainSection />
        <Device />
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default Profil;
