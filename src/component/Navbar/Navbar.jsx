import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  const [status, setStatus] = useState("");

  return (
    <div className="navbar">
      <div className="col-1">
        <Link to="Logo" className="Logo">
          <img src="images/Web Design01/navbar/Logo.svg" alt="Logo" />
        </Link>
      </div>
      <div className="col-9">
        <ul>
          <li>
            <Link to="kurslar">Kurslar</Link>
          </li>
          <li>
            <Link to="bloglar">Bloglar</Link>
          </li>
          <li>
            <Link to="natija">Natijalar</Link>
          </li>
          <li>
            <Link to="design">Web design 01</Link>
          </li>
        </ul>
      </div>
      <div className="col-2">
        <button>
          <span>Kirish</span>
          <img src="images/Web Design01/navbar/Person-icon.svg" alt="person" />
        </button>
        <div
          className={`btn-burger ${status}`}
          onClick={() =>
            setStatus(status === "open" ? "" : "open")
          }
        >
          <div className="burger"></div>
          <div className="burger1"></div>
          <div className="burger2"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
