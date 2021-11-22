import React, { useContext, useEffect, useState } from "react";
import { Context } from "./Profil";
import axios from "axios";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import MoonLoader from "react-spinners/MoonLoader";
import { toast, ToastContainer } from "react-toastify";
import "./modal.scss";
const override = `   
  position: absolute;
  border-radius: 50%;
  ${
    window.innerWidth > 767 ? "right : 100px" : "left : 100px"
  };                  
`;
function Modal() {
  const { count, setCount, bool, setBool } = useContext(Context);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState("");
  const [pass, setPass] = useState("");
  const [changePass, setChangePass] = useState("");
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("white");
  const [window, setWindow] = useState(false);

  const Submit = () => {
    let dat = JSON.parse(localStorage.getItem("user"));
    if (pass !== changePass || pass.length < 6 || changePass.length < 6) {
      toast.error("Parol mos kelmadi!");
    } else {
      if (name === "" || name.length < 3) {
      } else {
        if (lastName === "" || lastName.length < 3) {
        } else {
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
          let Item = {};
          if (image === dat.user.avatar) {
            Item = {
              firstName: name,
              lastName: lastName,
              password: pass,
            };
          } else {
            Item = {
              firstName: name,
              lastName: lastName,
              password: pass,
              avatar: image,
            };
          }
          setLoading((prev) => !prev);
          document.querySelector(".submit").disabled = true;
          let config = {
            method: "put",
            url: ` https://socially2.herokuapp.com/v2/user`,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${dat.tokens.accessToken}`,
            },
            data: JSON.stringify(Item),
          };
          axios(config)
            .then(function (res) {
              dat.user.firstName = name;
              dat.user.lastName = lastName;
              dat.user.password = pass;
              dat.user.avatar = image;
              localStorage.setItem("user", JSON.stringify(dat));
              toast.success("Ma'lumotlar muvaffaqiyatli o'zgartirlidi!");
              setPass("");
              setChangePass("");
              setCount((prev) => prev + 1);
              setLoading((prev) => !prev);
              document.querySelector(".submit").disabled = false;
              setBool(!bool);
              setWindow(!window);
            })
            .catch(function (error) {
              toast.error("Ma'lumotlar o'zgartirilmadi!");
              setLoading((prev) => !prev);
              document.querySelector(".submit").disabled = false;
              console.log(error);
            });
        }
      }
    }
  };

  useEffect(() => {
    let dat = JSON.parse(localStorage.getItem("user"));
    setImage(dat.user.avatar);
    setName(dat.user.firstName);
    setLastName(dat.user.lastName);
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
    console.log(image);
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
    setPass("");
    setChangePass("");
  };
  return (
    <div className={bool ? "modal" : "modal close"}>
      <div className="contain">
        <ToastContainer />
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
              <Tippy content="Ismingizni kiriting!">
                <img
                  src="images/Form/error.svg"
                  alt="img"
                  className="errorImg"
                  style={{
                    display: name === "" || name.length < 3 ? "block" : "none",
                  }}
                />
              </Tippy>
              <input
                name="lastName"
                type="text"
                className="tel"
                placeholder="Familyangiz"
                value={lastName}
                required
                onChange={(e) => setLastName(e.target.value)}
              />
              <Tippy content="Familyangizni kiriting!">
                <img
                  src="images/Form/error.svg"
                  alt="img"
                  className="errorImg2"
                  style={{
                    display:
                      lastName === "" || lastName.length < 3 ? "block" : "none",
                  }}
                />
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
              <Tippy
                content={
                  pass === ""
                    ? "Parolni to'ldiring!"
                    : pass.length < 6
                    ? "Parol 6 belgidan iborat bo'lsin!"
                    : ""
                }
              >
                <img
                  src="images/Form/error.svg"
                  alt="img"
                  className="errorImg"
                  style={{
                    display:
                      pass.length === 0
                        ? "none"
                        : pass.length < 6
                        ? "block"
                        : "none",
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
              />
              <Tippy
                content={
                  changePass.length > 0 && changePass.length < 6
                    ? "Tasdiqlovchi parol kiritilmagan!"
                    : changePass !== pass
                    ? "Tadiqlovchi parol xato!"
                    : ""
                }
              >
                <img
                  src="images/Form/error.svg"
                  alt="img"
                  className="errorImg2"
                  style={{
                    display:
                      changePass === ""
                        ? "none"
                        : changePass.length > 0 && changePass.length < 6
                        ? "block"
                        : changePass !== pass
                        ? "block"
                        : "none",
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
          <MoonLoader
            loading={loading}
            color={color}
            css={override}
            size={25}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
