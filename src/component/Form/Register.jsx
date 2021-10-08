import React from 'react'
import {useState, useEffect} from "react"
import {BrowserRouter as Route, Link} from "react-router-dom"
import "./register.scss"

function Register() {

  const [name,
    setname] = useState("")
  const [pass,
    setpass] = useState("")
  const [checkPass,
    setCheckPass] = useState("")

  return (
    <div className="register">
      <div className="container">

        <Link to="/" className="xBtn">
          <img src="images/Form/x.svg" alt="x"/>
        </Link>

        <div className="box">
          <h1>Ro'yhatdan o'tish</h1>
          <p>
            Saytning to‘liq imkoniyatlaridan foydalanish uchun tizimga kirishingiz kerak
            bo‘ladi
          </p>
          <input
            type="fname"
            value={name}
            onChange={(e) => {
            setname(e.target.value)
          }}
            placeholder="Ismingizni kiriting"/>
          <input
            type="password"
            value={pass}
            onChange={(e) => {
            setpass(e.target.value)
          }}
            placeholder="Parolni kiriting"/>
          <input
            type="password"
            value={checkPass}
            onChange={(e) => {
            setCheckPass(e.target.value)
          }}
            placeholder="Parolni kiriting"/>
          <Link to="/number">
            Ro’yxatdan o’tish
            <img src="images/Form/arrow.svg" alt="accept"/>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Register