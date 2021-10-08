import React from 'react'
import {useState, useEffect} from "react"
import {BrowserRouter as Route, Link} from "react-router-dom"
import "./login.scss"


function AuthNumber() {

  const [number,
    setnumber] = useState("+998")

  useEffect(() => {
    if (number.length <= 4) {
      setnumber("+998 ")
    }

  }, [number])

  return (
    <div className="login">
      <div className="container">

        <Link to="/" className="xBtn">
          <img src="images/Form/x.svg" alt="x"/>
        </Link>

        <div className="box">
          <h1>Tizimga kirish</h1>
          <p>
            Saytning to‘liq imkoniyatlaridan foydalanish uchun tizimga kirishingiz kerak
            bo‘ladi
          </p>
          <input
            type="tel"
            placeholder="Telefon raqamingiz"
            value={number}
            onChange={(e) => {
            setnumber(e.target.value)
          }}
            onFocus={() => {
            if (number.length === 0) {
              setnumber("+998 ")
            }
          }}
            maxLength="17"/>
          <input type="password" required placeholder="Password"/>
          <div className="password">
            <p className="forget">Parolni unutdingizmi?</p>
            <Link className="reset" to="number">
              Parolni tiklash
              <div className="underline"></div>
            </Link>
          </div>
          <Link to="/register" className="regLink">
            Tizimga kirish
            <img src="images/Form/arrow.svg" alt="arrow"/>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default AuthNumber