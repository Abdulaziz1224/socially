import React from 'react'
import {useState, useEffect} from "react"
import {BrowserRouter as Route, Link} from "react-router-dom";
import "./number.scss"

function Number() {

  const [number,
    setnumber] = useState("")

  useEffect(() => {
    let num = number

    if (isNaN(parseInt(num.slice(-1))) && num.slice(-1) !== " ") {
      setnumber(num.slice(0, -1))
    }

    if (number.length <= 4 && number.length !== 0) {
      setnumber("+998 ")
    }
  }, [number])

  // function emty(){
  //   if (number.length === 0) {
  //     setnumber("+998 ")
  //   }
  // }

  return (
    <div className="number">
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
            type="text"
            placeholder="Telefon raqamingiz"
            value={number}
            onChange={(e) => {
            setnumber(e.target.value)}}
            onFocus={()=>{
              if (number.length === 0) {
                  setnumber("+998 ")
                }
            }}
            />
          <Link to="authNumber" className="check">
            Tekshirish
            <img src="images/Form/arrow.svg" alt="arrow"/>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Number