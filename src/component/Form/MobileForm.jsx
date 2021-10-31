import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Web design01/Footer/Footer";
import MobileLogin from "./MobileLogin";
import MobileNumber from "./MobileNumber";
import MobileRegister from "./MobileRegister";
import MobileAuthNumber from "./MobileAuthNumber";
import "./mobileForm.scss";

import { useState } from "react";

export const MFormContext = React.createContext();

function MobileForm() {
  const [userData, setUserData] = useState(localStorage.getItem("user"));
  const [mForm, setMForm] = useState("number");
  const [mFirstName, setMFirstName] = useState("")

  useEffect(() => {
    let user;
    if (localStorage.getItem("user") !== null) {
      user = JSON.parse(localStorage.getItem("user"));
      setUserData(user);
      setMFirstName(user.user.firstName);
    }
  }, [mForm]);

  return (
    <div className="mobileForm">
      <MFormContext.Provider
        value={{
          mForm,
          setMForm,
          mFirstName
        }}
      >
        <Navbar mFirstName={mFirstName}/>
        <MobileNumber />
        <MobileAuthNumber />
        <MobileLogin />
        <MobileRegister />
        <Footer /> 
      </MFormContext.Provider>
    </div>
  );
}

export default MobileForm;
