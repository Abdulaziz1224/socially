import React, { useContext, useEffect, useState } from "react";
import { Context } from "./Profil";
import "./modal.scss";

function Modal() {
  const [son, setSon] = useState("");
  const { bool, setBool } = useContext(Context);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [changePass, setChangePass] = useState("");
  const [passMatch, setPassMatch] = useState(2);

  const Submit = (e) => {
    e.preventDefault();
    let Item = { image, name, pass, son };
    console.log(Item);
    // Item = Item.json()
    // let result = await axios()
    localStorage.setItem("user-info", JSON.stringify(Item));
    setSon("");
    setName("");
    setPass("");
    setChangePass("");
  };
  useEffect(() => {
    if (pass === changePass) {
      setPassMatch(1);
    } else {
      setPassMatch(0);
    }

    if (pass === "") {
      setPassMatch(2);
    }
    if (changePass === "") {
      setPassMatch(2);
    }
  }, [changePass, pass]);

  useEffect(() => {
    let num = son;

    if (num.charAt(0) !== "+") {
      num = "+" + num.slice(1);
      setSon(num);
    }
    if (num.charAt(1) !== "9") {
      num = num.slice(0, 1) + "9" + num.slice(3);
      setSon(num);
    }
    if (num.charAt(2) !== "9") {
      num = num.slice(0, 2) + "9" + num.slice(4);
      setSon(num);
    }
    if (num.charAt(3) !== "8") {
      num = num.slice(0, 3) + "8" + num.slice(5);
      setSon(num);
    }
    if (num.charAt(4) !== " ") {
      num = num.slice(0, 4) + " " + num.slice(6);
      setSon(num);
    }
    if (num.charAt(5) !== "(" && num.charAt(5) !== "") {
      num = num.slice(0, 5) + "(" + num.slice(5);
      setSon(num);
    }
    if (
      num.charAt(8) !== ")" &&
      num.charAt(7) !== "" &&
      num.charAt(7) !== ")" &&
      num.charAt(8) !== ""
    ) {
      num = num.slice(0, 8) + ") " + num.slice(8);
      setSon(num);
    }
    if (num.charAt(9) !== " " && num.charAt(9) !== "") {
      num = num.slice(0, 9) + " " + num.slice(9);
      setSon(num);
    }
    if (num.charAt(13) !== "-" && num.charAt(13) !== "") {
      num = num.slice(0, 13) + "-" + num.slice(13);
      setSon(num);
    }
    if (num.charAt(16) !== "-" && num.charAt(16) !== "") {
      num = num.slice(0, 16) + "-" + num.slice(16);
      setSon(num);
    }

    for (let i = 0; i < num.length; i++) {
      let check =
        num.charAt(i) === "+" ||
        num.charAt(i) === "(" ||
        num.charAt(i) === ")" ||
        num.charAt(i) === " " ||
        num.charAt(i) === "-";
      if (isNaN(parseInt(num.charAt(i))) && !check) {
        num = num.slice(0, i) + num.slice(i + 1);
        setSon(num);
      }
      if (num.charAt(5) === " ") {
        num = num.slice(0, 5) + num.slice(5 + 1);
      }
      if (num.charAt(6) === " " || num.charAt(6) === ")") {
        num = num.slice(0, 6) + num.slice(6 + 1);
        setSon(num);
      }
      if (num.charAt(7) === " " || num.charAt(7) === ")") {
        num = num.slice(0, 7) + num.slice(7 + 1);
        setSon(num);
      }
      if (num.charAt(10) === " " || num.charAt(10) === "-") {
        num = num.slice(0, 10) + num.slice(10 + 1);
        setSon(num);
      }
      if (num.charAt(11) === " " || num.charAt(11) === "-") {
        num = num.slice(0, 11) + num.slice(11 + 1);
        setSon(num);
      }
      if (num.charAt(12) === " " || num.charAt(12) === "-") {
        num = num.slice(0, 12) + num.slice(12 + 1);
        setSon(num);
      }
      if (num.charAt(14) === " " || num.charAt(14) === "-") {
        num = num.slice(0, 14) + num.slice(14 + 1);
        setSon(num);
      }
      if (num.charAt(15) === " " || num.charAt(15) === "-") {
        num = num.slice(0, 15) + num.slice(15 + 1);
        setSon(num);
      }
      if (num.charAt(17) === " " || num.charAt(17) === "-") {
        num = num.slice(0, 17) + num.slice(17 + 1);
        setSon(num);
      }
      if (num.charAt(18) === " " || num.charAt(18) === "-") {
        num = num.slice(0, 18) + num.slice(18 + 1);
        setSon(num);
      }
    }
  }, [son]);

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const deleteFunc = () => {
    setBool(!bool);
  };
  return (
    <div className={bool ? "modal" : "modal close"}>
      <div className="contain">
        <img
          onClick={deleteFunc}
          src="images/Web Design01/footer/x.svg"
          alt=""
          className="delete"
        />
        <h3>Profil sozlamalari</h3>
        <p>O‘zgarishlar qilish uchun ma’lumotlaringizni kiriting</p>
        <form action="ro'yxat" method="POST">
          <div className="form">
            <div className="img">
              <input
                type="file"
                id="file"
                className="file"
                accept="image/*"
                onChange={imageHandler}
              />
              <label htmlFor="file">
                <img
                  src="images/Web Design01/footer/kamera.svg"
                  className="kamera"
                  alt="png"
                />
                <div
                  className="rasm"
                  style={{
                    visibility: image !== "" ? "visible" : "hidden",
                  }}
                >
                  <img src={image} alt=" " className="profilRasm" />
                  <div className="qalams">
                    <img
                      src="./images/Web Design01/footer/qalam.png"
                      alt="qalam"
                      className="qalam"
                    />
                  </div>
                </div>
              </label>
            </div>
            <div className="name">
              <input
                type="text"
                autoComplete="off"
                name="name"
                className="name"
                placeholder="Ismingiz"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                name="tel"
                type="tel"
                className="tel"
                placeholder="Telefon raqamingiz"
                value={son}
                onFocus={() => {
                  console.log(son);
                }}
                onChange={(e) => setSon(e.target.value)}
                maxLength="19"
              />
            </div>
            <div className="parol">
              <input
                name="pass1"
                type="password"
                className="pass1"
                placeholder="Yangi parol"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <input
                name="pass2"
                type="password"
                className="pass2"
                placeholder="Parolingizni tasdiqlang"
                value={changePass}
                onChange={(e) => setChangePass(e.target.value)}
                style={{
                  border:
                    passMatch === 0 ? "2px solid #F3494A" : "2px solid #EAEAEA",
                }}
              />
            </div>
          </div>
          <div className="change-info">
            <input
              type="submit"
              value="O'zgarishlarni saqlash"
              className="submit"
              onChange={(e) => {
                e.preventDefault();
              }}
              onClick={Submit}
            />
            <img
              src="images/Web Design01/footer/Vector.png"
              alt="img"
              className="vector"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
