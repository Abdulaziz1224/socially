import React, { useContext, useEffect, useState } from "react";
import { Context } from "./Profil";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import "./modal.scss";
import axios from "axios";

function Modal() {
  const { count, setCount, bool, setBool } = useContext(Context);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState("");
  const [pass, setPass] = useState("");
  const [changePass, setChangePass] = useState("");
  const [passMatch, setPassMatch] = useState(2);

  const Submit = (e) => {
    let dat = JSON.parse(localStorage.getItem("user"));
    let Item = {};

    if (image === dat.user.avatar) {
      Item = {
        "firstName": `${name}`,
        "lastName": `${lastName}`,
        "password": `${pass}`,
      };
    } else {
      Item = {
        "firstName": `${name}`,
        "lastName": `${lastName}`,
        "password": `${pass}`,
        "avatar": `${image}`,
      };
    }
    if (pass !== changePass || (pass.length < 6 || changePass.length < 6)) {
      alert("Parol mos kelmadi");
    } else 
      if (name === "" || name.length < 3) {
        
      } else 
      if(lastName === "" || lastName.length < 3){
    
      }
      else{

        // const form = new FormData();
        // form.append("image", image);
        // console.log(image);
        // let config = {
        //   method: "post",
        //   url: `https://socially2.herokuapp.com/v2/upload/image`,
        //   headers: {
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
        let config = {
          method: "put",
          url: `https://socially2.herokuapp.com/v2/user`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${dat.tokens.accessToken}`,
          },
          data: Item,
        };
        axios(config)
          .then(function (res) {
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
            setCount((prev) => prev + 1);
          })
          .catch(function (error) {
            alert("qo'shilmadi");
          });
      }
    
  };
  useEffect(() => {
    let dat = JSON.parse(localStorage.getItem("user"));
    setImage(dat.user.avatar);
    setName(dat.user.firstName);
    setLastName(dat.user.lastName);
    setPass(dat.user.password );
  }, [count]);

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
    // setImage(e.target.files[0]);

    // let form = new FormData()
    // form.append("avatar", e.target.files[0]);
    // form = JSON.stringify(form);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };
  const deleteFunc = () => {
    setBool(!bool);
    setCount(count + 1);
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
                placeholder="Ismingiz kiriting"
                required="required"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Tippy content="Ismingizni kiriting!">
              <img src="images/Form/error.svg" alt="img" className="errorImg" style={{
                display: name === "" || name.length < 3 ? "block" : "none" 
              }}/>
              </Tippy>
              <input
                name="lastName"
                type="text"
                className="tel"
                placeholder="Familyangizni kiriting"
                value={lastName}
                required
                onChange={(e) => setLastName(e.target.value)}
              />
              <Tippy content="Familyangizni kiriting!">
              <img src="images/Form/error.svg" alt="img" className="errorImg2" style={{
                display: lastName === "" || lastName.length < 3 ? "block" : "none" 
              }}/>
              </Tippy>
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
              <Tippy content={pass==="" ? "Parolni to'ldiring!" : pass.length < 6 ? "Parol 6 belgidan iborat bo'lsin!" : ""}>
              <img src="images/Form/error.svg" alt="img" className="errorImg"
            style={{
              display: pass === "" || pass.length < 6 ? "block" : "none" 
            }}
              />
              </Tippy>
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
              <Tippy content={changePass==="" ? "Tasdiqlovchi parol kiritilmagan!" : changePass!==pass ? "Tadiqlovchi parol xato!": ""}>
              <img src="images/Form/error.svg" alt="img" className="errorImg2" 
              style={{
                display: changePass.length === 0 ? "none" : changePass.length < 6 ?  "block" : "none" 
              }}
              />
              </Tippy>
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
