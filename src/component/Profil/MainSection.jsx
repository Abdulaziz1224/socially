import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./mainSection.scss";
import Modal from "./Modal";

function MainSection() {
  const [data, setData] = useState([]);
  return (
    <div className="profilSection">
      <div className="container">
        <div className="col-4">
          <div className="information">
            <div className="profil">
              <img src="images/Web Design01/navbar/Person-icon.svg" alt="img" />
            </div>
            <div className="info">
              <div className="name">
                <span>Foydalanuvchi ismi</span>
                {/* <h3>{data.name.length > 14 ? "Bahodir Yoqubo..." : `${data.name}`}</h3> */}
                <p className="kompText">Bahodir Yoqubov</p>
                <p className="tableText">Bahodir Yoqubo...</p>
              </div>
              <div className="num">
                <span>Telefon raqami</span>
                <p className="komp">+998 (97) 707-27-11</p>
                <p className="table">(97) 707-27-11 </p>
              </div>
            </div>
          </div>
          <div className="tizim">
            <button className="settings">
              Profil sozlamalari
              <img src="images/Web Design01/footer/pen.png" alt="img" />
            </button>
            <button className="out">
              Tizimdan chiqish
              <img src="images/Web Design01/footer/log-out.png" alt="img" />
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
              <img src="images/Web Design01/footer/telegram.png" alt="link" />
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
              <img src="images/Web Design01/footer/telegram.png" alt="link" />
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
              <img src="images/Web Design01/footer/telegram.png" alt="link" />
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
              <img src="images/Web Design01/footer/phone.png" alt="link" />
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
      <Modal />
    </div>
  );
}

export default MainSection;
