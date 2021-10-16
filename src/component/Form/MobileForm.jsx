import React from 'react'
import Navbar from "../Navbar/Navbar"
import Footer from "../Web design01/Footer/Footer"
import MobileLogin from "./MobileLogin"
import MobileNumber from "./MobileNumber"
import MobileRegister from "./MobileRegister"
import MobileAuthNumber from "./MobileAuthNumber"
import "./mobileForm.scss"

import {useState} from 'react'

export const MFormContext = React.createContext()

function MobileForm() {

  const [mForm,
    setMForm] = useState("number")

  return (
    <div className="mobileForm">
      <MFormContext.Provider value={{
        mForm,
        setMForm
      }}>
        <Navbar/>
        <MobileNumber/>
				<MobileAuthNumber />
				<MobileLogin />
				<MobileRegister />
        <Footer/>
      </MFormContext.Provider>
    </div>
  )
}

export default MobileForm
