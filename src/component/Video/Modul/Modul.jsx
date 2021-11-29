import React, { useEffect, useState } from "react";
import Modul1 from "./Modules/Modul1";
import Modul2 from "./Modules/Modul2";
import Modul3 from "./Modules/Modul3";
import axios from "axios";
import { VideoContext } from "../Video";
import { useContext } from "react/cjs/react.development";

function Modul() {
  const { modul, setModul } = useContext(VideoContext);
  const [modules, setModules] = useState([]);
  useEffect(() => {
    axios
      .get(`https://socially.uz/api/v2/course/public/${window.location.href.slice(-4)}`)  
      .then((res) => {
        setModules(res.data.data.course.modules);
        console.log(res.data.data.course.modules);
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

        {/* <ModulContext.Provider value=
        {{ 
          modul,
          setModul,
          modules 
        }} */}
        {/* > */}
        <Modul1 modules={modules} />
        <Modul2 modules={modules} />
        <Modul3 modules={modules} />
        {/* </ModulContext.Provider> */}
      </div>
    </div>
  );
}

export default Modul;
