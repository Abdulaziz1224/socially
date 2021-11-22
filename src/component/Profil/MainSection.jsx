import React, { useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Profil";
import { toast, ToastContainer } from "react-toastify";
import "./mainSection.scss";
import axios from "axios";
import { useHistory } from "react-router";
function MainSection() {
  const { bool, setBool, data } = useContext(Context);
  let history = useHistory();
  const openModal = () => {
    setBool(!bool);
  };
  const Logout = useCallback(() => {
    let config = {
      method: "delete",
      url: ` https://socially2.herokuapp.com/v2/logout`,
      headers: {
        "x-api-key": "YqUxxDV7wuT3e2fUfybqy9Xd8Y6bV8KEh2EQ",
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.tokens.accessToken}`,
      },
    };
    axios(config)
      .then(function (res) {
        history.push("/");
        localStorage.removeItem("user");
        toast.success("Tizimdan muvaffaqiyatli chiqdingiz!");
      })
      .catch(function (err) {
        toast.error("Tizimda xatolik!");
      });
  }, []);
  return (
    <div className="profilSection">
      <div className="container">
        <ToastContainer />
        <div className="col-4">
          <div className="information">
            <div className="profil">
              <img
                src={
                  data === null
                    ? "images/Web Design01/navbar/Person-icon.svg"
                    : data.user.avatar === ""
                      ? "images/Web Design01/navbar/Person-icon.svg"
                      : data.user.avatar
                }
                alt="img"
                className="person"
                style={{
                  display:
                    data === null
                      ? "block"
                      : data.user.avatar === ""
                        ? "block"
                        : "none",
                }}
              />
              <img
                src={data.user.avatar}
                style={{
                  display:
                    data === null
                      ? "none"
                      : data.user.avatar === ""
                        ? "none"
                        : "block",
                }}
                alt="profilImg"
                className="profilImg"
              />
            </div>
            <div className="info">
              <div className="name">
                <span>Foydalanuvchi ismi</span>
                <p className="kompText">
                  {window.innerWidth > 1140 || window.innerWidth < 767
                    ? data.user.firstName + " " + data.user.lastName
                    : (data.user.firstName + " " + data.user.lastName).length <=
                      13
                      ? data.user.firstName + " " + data.user.lastName
                      : (data.user.firstName + " " + data.user.lastName)
                        .slice(0, 13)
                        .padEnd(16, ".")}
                </p>
              </div>
              <div className="num">
                <span>Telefon raqami</span>
                <p className="komp">
                  {window.innerWidth > 1140 || window.innerWidth < 767
                    ? data.user.phone
                    : data.user.phone.slice(4, data.user.phone.length)}
                </p>
              </div>
            </div>
          </div>
          <div className="tizim">
            <button className="settings" onClick={openModal}>
              Profil sozlamalari
            </button>
            <button className="out" onClick={Logout}>
              Tizimdan chiqish
            </button>
          </div>
        </div>
        <div className="col-2">
          <div className="caption">
            <h3>A‘loqa uchun</h3>
          </div>
          <div className="connect">
            <div className="link">
              <img src="images/Web Design01/footer/telegram.svg" alt="link" />
              <Link
                target="_blank"
                to={{
                  pathname: "https://www.t.me/sociallyadmin",
                }}
              >
                t.me/sociallyadmin
              </Link>
            </div>
            <div className="link">
              <img src="images/Web Design01/footer/telegram.svg" alt="link" />
              <Link
                target="_blank"
                to={{
                  pathname: "https://www.t.me/sociallyadmin",
                }}
              >
                t.me/sociallyuz
              </Link>
            </div>
            <div className="link">
              <img src="images/Web Design01/footer/telegram.svg" alt="link" />
              <Link
                target="_blank"
                to={{
                  pathname: "https://www.t.me/sociallyadmin",
                }}
              >
                t.me/sociallygroup
              </Link>
            </div>
            <div className="link">
              <img src="images/Web Design01/footer/phone.svg" alt="link" />
              <Link
                target="_blank"
                to={{
                  pathname: "https://www.t.me/sociallyadmin",
                }}
              >
                +998 (99) 978-61-69
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
