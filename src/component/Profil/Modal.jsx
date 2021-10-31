import React, { useContext, useEffect, useState } from "react";
import { Context } from "./Profil";
import "./modal.scss";
import axios from "axios";

function Modal() {
  const [lastName, setLastName] = useState("");
  const { bool, setBool } = useContext(Context);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [changePass, setChangePass] = useState("");
  const [passMatch, setPassMatch] = useState(2);

  const Submit = (e) => {
    e.preventDefault();
    let Item = {
      "firstName": `${name}`,
      "lastName": `${lastName}`,
      "password": `${pass}`,
      "avatar": `${image}`,
    };

    let dat = JSON.parse(localStorage.getItem("user"));
console.log(dat);
    let config = {
      method: "put",
      url: `https://socially2.herokuapp.com/v2/user`,
      headers: {
        "x-api-key": "YqUxxDV7wuT3e2fUfybqy9Xd8Y6bV8KEh2EQ",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${dat.tokens.accessToken}`,
      },

      data: Item,
    };

    axios(config)
      .then(function (response) {
        alert("qo'shildi");
        console.log(response);
        setBool(!bool);
        localStorage.setItem(response.data)
      })
      .catch(function (error) {
        alert("qo'shilmadi");
        console.log(error);
      });
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
        <form method="Post" action="">
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
                name="name"
                autoFocus
                className="name"
                placeholder="Ismingiz"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                name="lastName"
                type="text"
                className="tel"
                placeholder="Familyangizni kiriting"
                value={lastName}
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="parol">
              <input
                name="pass1"
                type="password"
                className="pass1"
                placeholder="Yangi parol"
                required
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <input
                name="pass2"
                type="password"
                className="pass2"
                required
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
