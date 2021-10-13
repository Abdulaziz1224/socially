import React, { useContext} from "react";
// import MainSection from "./MainSection";
import "./modal.scss";
import { Context } from "./MainSection";

function Modal() {
  const { bool, setBool } = useContext(Context);
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
        <form action="ro'yxat">
          <div className="form">
            <div className="img">
              <input type="file" id="file" className="file" />
              <label htmlFor="file">
                <img
                  src="images/Web Design01/footer/kamera.png"
                  className="kamera"
                  alt="png"
                />
                {/* <img src="" alt="" /> */}
              </label>
            </div>
            <div className="name">
              <input
                type="text"
                autoComplete="off"
                name="name"
                className="name"
                placeholder="Ismingiz"
              />
              <input
                name="tel"
                type="tel"
                className="tel"
                placeholder="Telefon raqamingiz"
              />
            </div>
            <div className="parol">
              <input
                name="pass1"
                type="password"
                className="pass1"
                placeholder="Yangi parol"
              />
              <input
                name="pass2"
                type="password"
                className="pass2"
                placeholder="Parolingizni tasdiqlang"
              />
            </div>
          </div>
          <div className="change-info">
            <input
              type="submit"
              value="O'zgarishlarni saqlash"
              className="submit"
              // onClick={(e) => {
              //   e.preventDefault();
              // }}
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
