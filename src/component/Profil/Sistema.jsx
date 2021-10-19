import React from "react";
import "./sistem.scss";

function Sistema() {
  return (
    <div className="sistema">
      <div className="title">
        <h3>Windows 10, Chrome</h3>
        <span>21:42:37 21-09-2021</span>
      </div>
      <div className="systemDelete">
        <div className="activeBox">
          <div className="row">
            <div className="green">
              <img
                className="red"
                src="images/Web Design01/footer/Vector2.png"
                alt="img"
              />
            </div>
            <p>Aktiv qurilma</p>
          </div>
        </div>
        <div className="qurilma">
          <div className="row">
            <p className="p">
              <span className="span1">Qurilamani</span> <span className="span2">o'chirish</span>
            </p>
            <img src="images/Web Design01/footer/x.svg" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sistema;
