import React from 'react'
import {useState, useEffect} from "react"
import {BrowserRouter as Route, Link} from "react-router-dom";
import "./number.scss"

function Number() {

  const [number,
    setnumber] = useState("")
  // const [num, setNum] = useState(0)
  const [space,
    setSpace] = useState(0)

  useEffect(() => {
    let num = number

    if (num.charAt(0) !== "+") {
      num = "+" + num.slice(1)
      setnumber(num)
    }
    if (num.charAt(1) !== "9") {
      num = num.slice(0, 1) + "9" + num.slice(3)
      setnumber(num)
    }
    if (num.charAt(2) !== "9") {
      num = num.slice(0, 2) + "9" + num.slice(4)
      setnumber(num)
    }
    if (num.charAt(3) !== "8") {
      num = num.slice(0, 3) + "8" + num.slice(5)
      setnumber(num)
    }
    if (num.charAt(4) !== " ") {
      num = num.slice(0, 4) + " " + num.slice(6)
      setnumber(num)
    }
    if (num.charAt(5) !== "(" && num.charAt(5) !== "") {
      num = num.slice(0, 5) + "(" + num.slice(5)
      setnumber(num)
    }
    if (num.charAt(8) !== ")" && num.charAt(7) !== "" && num.charAt(7) !== ")" && num.charAt(8) !== "") {
      num = num.slice(0, 8) + ") " + num.slice(8)
      setnumber(num)
    }
    if (num.charAt(9) !== " " && num.charAt(9) !== "") {
      num = num.slice(0, 9) + " " + num.slice(9)
      setnumber(num)
    }
    if (num.charAt(13) !== "-" && num.charAt(13) !== "") {
      num = num.slice(0, 13) + "-" + num.slice(13)
      setnumber(num)
    }
    if (num.charAt(16) !== "-" && num.charAt(16) !== "") {
      num = num.slice(0, 16) + "-" + num.slice(16)
      setnumber(num)
    }

    for (let i = 0; i < num.length; i++) {
      let check = num.charAt(i)==="+" || num.charAt(i)==="(" || num.charAt(i)===")" || num.charAt(i)===" " || num.charAt(i)==="-"
      if (isNaN(parseInt(num.charAt(i))) && !check) {
        num = num.slice(0,i) + num.slice(i+1)
        setnumber(num)
      }
    }

  }, [number])

  // function emty(){   if (number.length === 0) {     setnumber("+998 ")   } }

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
            maxLength="19"/>
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