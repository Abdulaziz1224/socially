import React, { useEffect, useState } from "react";
import Modul1 from "./Modules/Modul1";
import Modul2 from "./Modules/Modul2";
import Modul3 from "./Modules/Modul3";
import axios from "axios";
export const ModulContext = React.createContext();

function Modul() {
  const [modul, setModul] = useState(1);
  const [modules, setModules] = useState([]);
  useEffect(() => {
    axios
      .get("https://socially.uz/api/v2/course/public/1003")
      .then((res) => {
        setModules(res.data.data.course.modules);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="modul">
      <div className="container">
        <nav className="modulNav">
          <button
            onClick={() => setModul(1)}
            style={{ backgroundColor: modul === 1 ? "#FFFFFF" : "#F4F4F4" }}
          >
            <p>1-modul</p>
            {modul === 1 ? (
              <img src="images/videoCourse/current.svg" alt="" />
            ) : (
              ""
            )}
          </button>
          <button
            onClick={() => setModul(2)}
            style={{ backgroundColor: modul === 2 ? "#FFFFFF" : "#F4F4F4" }}
          >
            <p>2-modul</p>
            {modul === 2 ? (
              <img src="images/videoCourse/current.svg" alt="" />
            ) : (
              ""
            )}
          </button>
          <button
            onClick={() => setModul(3)}
            style={{ backgroundColor: modul === 3 ? "#FFFFFF" : "#F4F4F4" }}
          >
            <p>3-modul</p>
            {modul === 3 ? (
              <img src="images/videoCourse/current.svg" alt="" />
            ) : (
              ""
            )}
          </button>
        </nav>

        <ModulContext.Provider value=
        {{ 
          modul,
          setModul,
          modules 
        }}
        >
          <Modul1 />
          <Modul2 />
          <Modul3 />
        </ModulContext.Provider>
      </div>
    </div>
  );
}

export default Modul;
