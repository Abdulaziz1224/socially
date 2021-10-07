import React from 'react'
import {useState, useEffect} from "react"
import {BrowserRouter as Route, Link} from "react-router-dom"

function AuthNumber() {

  const [number,
    setnumber] = useState("+998")

  useEffect(() => {
    if (number.length <= 4) {
      setnumber("+998 ")
    }

  }, [number])

  return (
    <div className="authNumber">
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
          <input type="text"/>
          <Link to="/register">
            Tizimga kirish
            <img src="images/Form/ok.svg" alt="accept"/>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default AuthNumber