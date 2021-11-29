import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Web design01/Footer/Footer";
import MobileLogin from "./MobileLogin";
import MobileNumber from "./MobileNumber";
import MobileRegister from "./MobileRegister";
import MobileAuthNumber from "./MobileAuthNumber";
import {useHistory} from "react-router-dom"
import "./mobileForm.scss";

import { useState } from "react";
import MobilePassRecovery from "./MobilePassRecovery";

export const MFormContext = React.createContext();


function MobileForm() {
  const [sendCode, setSendCode] = useState(0);

  const [mForm, setMForm] = useState("number");
  const [mFirstName, setMFirstName] = useState("");
  const [foot, setFoot] = useState("mobileForm");
  const [xClick, setXClick] = useState(0);
  const [rec, setRec] = useState(false);

  const history = useHistory()

  window.addEventListener("resize",()=>{
    if(window.innerWidth>576){
      history.push("/")
    }
  })

  useEffect(() => {
    let user;
    if (localStorage.getItem("user") !== null) {
      user = JSON.parse(localStorage.getItem("user"));
      setMFirstName(user.user.firstName);
    }
    if (mForm === "register") {
      setFoot("mobileForm reg");
    } else if (mForm === "login" || mForm === "recovery") {
      setFoot("mobileForm log");
    } else {
      setFoot("mobileForm");
    }
  }, [mForm]);

  useEffect(()=>{
    if(localStorage.getItem("redirect")){
      setMForm("number")
      setXClick(1)
    }
    localStorage.removeItem("redirect")
  }, [])

  return (
    <div className={foot}>
      <MFormContext.Provider
        value={{
          mForm,
          setMForm,
          mFirstName,
          sendCode,
          setSendCode,
          xClick,
          setXClick,
          rec,
          setRec,
        }}
      >
        <Navbar />
        {mForm === "number" ? <MobileNumber /> : ""}
        {mForm === "authNumber" ? <MobileAuthNumber /> : ""}
        {mForm === "login" ? <MobileLogin /> : ""}
        {mForm === "register" ? <MobileRegister /> : ""}
        {mForm === "recovery" ? <MobilePassRecovery /> : ""}
        <Footer />
      </MFormContext.Provider>
    </div>
  );
}

export default MobileForm;
