import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Profil";
import "./mainSection.scss";
import axios from "axios";
function MainSection() {
  const {count, bool, setBool } = useContext(Context);
  const [data, setData] = useState(JSON.parse(localStorage.getItem("user")));

  const openModal = () => {
    setBool(!bool);
  };
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("user")));
  }, [count]);
  function Logout() {
    if (data) {
      let config = {
        method: "delete",
        url: `https://socially2.herokuapp.com/v2/logout`,
        headers: {
          //  "x-api-key": "YqUxxDV7wuT3e2fUfybqy9Xd8Y6bV8KEh2EQ",
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.tokens.accessToken}`,
        },
      };
      axios(config)
        .then(function (response) {
          alert("o'chdi");
          // <Redirect to="/bloglar" />;
          window.location.href = "/";
        })
        .catch(function (error) {
          console.log(error);
          alert("o'chmadi");
        });
    }
  }
  return (
    <div className="profilSection">
      <div className="container">
        <div className="col-4">
          <div className="information">
            <div className="profil">
              <img
                src={
                  data.user.avatar !== "1.2"
                    ? data.user.avatar
                    : `images/Web Design01/navbar/Person-icon.svg`
                }
                alt=""
              />
            </div>
            <div className="info">
              <div className="name">
                <span>Foydalanuvchi ismi</span>
                <p className="kompText">
                  {data.user.firstName + " " + data.user.lastName}
                </p>
                <p className="tableText">Bahodir Yoqubo...</p>
              </div>
              <div className="num">
                <span>Telefon raqami</span>
                <p className="komp">{data.user.phone}</p>
                <p className="table">(97) 707-27-11 </p>
              </div>
            </div>
          </div>
          <div className="tizim">
            <button className="settings" onClick={openModal}>
              Profil sozlamalari
              <img src="images/Web Design01/footer/pen.svg" alt="img" />
            </button>
            <button className="out" onClick={Logout}>
              Tizimdan chiqish
              <img src="images/Web Design01/footer/log-out.svg" alt="img" />
            </button>
          </div>
        </div>
        <div className="col-2">
          <div className="caption">
            <h3>A‘loqa uchun</h3>
            <img
              src="images/Asosiy Qism/available courses/Group 130.svg"
              alt="link"
              className="svg"
            />
            <img
              src="images/Asosiy Qism/available courses/Group 130.png"
              alt="link"
              className="png"
            />
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
