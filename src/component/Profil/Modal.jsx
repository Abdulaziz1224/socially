import React, { useContext, useEffect, useState } from "react";
import { Context } from "./Profil";
import "./modal.scss";
import axios from "axios";

function Modal() {
  
  const {count, setCount, bool, setBool } = useContext(Context);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState("");
  const [pass, setPass] = useState("");
  const [changePass, setChangePass] = useState("");
  const [passMatch, setPassMatch] = useState(2);


  const Submit = (e) => {
    let dat = JSON.parse(localStorage.getItem("user"));
    let Item = {
      "firstName": `${name}`,
      "lastName": `${lastName}`,
      "password": `${pass}`,
      "avatar": `${image}`,
    };
    let config = {
      method: "put",
      url: `https://socially2.herokuapp.com/v2/user`,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${dat.tokens.accessToken}`,
      },
      data: Item,
    };
    // const form = new FormData(); 
    // form.append("image", image);
    // // form = JSON.stringify(form);
    // console.log(image);
    // let config = {
    //   method: "post",
    //   url: `https://socially2.herokuapp.com/v2/upload/image`,
    //   headers: {
    //     // "x-api-key": "YqUxxDV7wuT3e2fUfybqy9Xd8Y6bV8KEh2EQ",
    //     "Content-Type": "multipart/form-data",
    //     Authorization: `Bearer ${dat.tokens.accessToken}`,
    //   },
    //   data: form,
    // };
    // axios(config)
    //   .then(function (response) {
    //     alert("qo'shildi");
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     alert("qo'shilmadi");
    //     console.log(error);
    //   });
    axios(config)
      .then(function (response) {
        alert("qo'shildi");
        setBool(!bool);
        dat.user.firstName = name;
        dat.user.lastName = lastName;
        dat.user.password = pass;
        dat.user.avatar = image;
        localStorage.setItem("user", JSON.stringify(dat));
        setName("");
        setLastName("");
        setImage("");
        setPass("");
        setChangePass("");
        setCount(prev => prev + 1);
      })
      .catch(function (error) {
        alert("qo'shilmadi");
        console.log(error);
      });
  };
  useEffect(() => {
     let dat = JSON.parse(localStorage.getItem("user"));
     setImage( dat.user.avatar)
     setName(dat.user.firstName);
     setLastName(dat.user.lastName)
     console.log(count+"salom");
  }, [count])

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
      // console.log(reader.readAsDataURL(e.target.files[0]));
    }
    // setImage(e.target.value );

    // let form = new FormData()
    // form.append("avatar", e.target.files[0]);
    // // form = JSON.stringify(form);
    // console.log(form);
    // let dat = JSON.parse(localStorage.getItem("user"))  ;
    // let config = {
    //   method: "post",
    //   url: (`https://socially2.herokuapp.com/v2/upload/image`),
    //   data: form,
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //     "Authorization": `Bearer ${dat.tokens.accessToken}`,
    //   },
    // };
    // axios(config)
    //   .then(function (response) {
    //     alert("qo'shildi");
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     alert("qo'shilmadi");
    //     console.log(error);
    //   });
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
        <form method="Post">
          <div className="form">
            <div className="img">
              <input
                name="uploadImg"
                type="file"
                id="file"
                className="file"
                accept="image/*"
                required
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
                required="required"
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
        </form>
        <div className="change-info">
          <button className="submit" onClick={Submit}>
            O'zgarishlarni saqlash
          </button>
          <img
            src="images/Web Design01/footer/Vector.png"
            alt="img"
            className="vector"
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
