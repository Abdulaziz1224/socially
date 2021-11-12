import React, { useContext, useEffect, useRef, useState } from "react";
import AccardionTop from "./AccardionTop";
import { IoIosArrowDown } from "react-icons/io";
import "./section4.scss";
import axios from "axios";

function Section4() {
  const [check, setCheck] = useState({ text: "1-modul o'quv dasturi", key: 1 });
  const [heights, setHeights] = useState(0);
  const contentTablet = useRef(null);
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

  const toggle = () => {
    setHeights(heights === 0 ? `${contentTablet.current.scrollHeight}px` : 0);
  };

  return (
    <div className="section4">
      <div className="container">
        <div className="Caption-box">
          <div className="col-6">
            <h3>Kurs o‘quv dasturi</h3>
            <img src="/images/Web Design01/section-3/Group 130.svg" alt="svg" />
          </div>
          <div className="col-6">
            <div className="curriculum tablet">
              <div className="selected" onClick={toggle}>
                <p className="textOption">{check.text}</p>
                <div className={heights === 0 ? "rotate up" : "rotate down"}>
                  <IoIosArrowDown className="arrowDown" />
                </div>
              </div>
              <div
                className="options"
                ref={contentTablet}
                style={{
                  height: `${heights}`,
                  border:
                    heights === 0
                      ? "2px solid transparent"
                      : "2px solid #eaeaea",
                  background: heights === 0 ? "transparent" : "#FFFFFF",
                }}
              >
                <div className="options-opt">
                  <div
                    className={check.key === 1 ? "select true" : "select"}
                    onClick={() => {
                      setCheck({ text: "1-modul o'quv dasturi", key: 1 });
                      toggle();
                    }}
                  >
                    <p>1-modul o'quv dasturi</p>
                    <div className="radio">
                      <div className={check.key === 1 ? "circle" : ""}></div>
                    </div>
                  </div>
                  <div
                    className={check.key === 2 ? "select true" : "select"}
                    onClick={() => {
                      setCheck({ text: "2-modul o'quv dasturi", key: 2 });
                      toggle();
                    }}
                  >
                    <p>2-modul o'quv dasturi</p>
                    <div className="radio">
                      <div className={check.key === 2 ? "circle" : ""}></div>
                    </div>
                  </div>
                  <div
                    className={check.key === 3 ? "select true" : "select"}
                    onClick={() => {
                      setCheck({ text: "3-modul o'quv dasturi", key: 3 });
                      toggle();
                    }}
                  >
                    <p>3-modul o'quv dasturi</p>
                    <div className="radio">
                      <div className={check.key === 3 ? "circle" : ""}></div>
                    </div>
                  </div>
                  <div
                    className={check.key === 4 ? "select true" : "select"}
                    onClick={() => {
                      setCheck({ text: "4-modul o'quv dasturi", key: 4 });
                      toggle();
                    }}
                  >
                    <p>4-modul o'quv dasturi</p>
                    <div className="radio">
                      <div className={check.key === 4 ? "circle" : ""}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accardion-box">
          <div className="accardion-box-left">
            {modules.length !== 0
              ? modules[check.key - 1] !== undefined
                ? modules[check.key - 1].lessons.map((value, index) => {
                    return index < 7 ?     
                      <AccardionTop
                        key={Math.random() * 10000}
                        theme={value.theme}
                        parts={value.parts}
                        index={index < 9 ? "0" + (index + 1) : index + 1}
                      /> : ""  
                    
                  })
                : ""
              : ""}
          </div>
          <div className="accardion-box-right">
          {modules.length !== 0
              ? modules[check.key - 1] !== undefined
                ? modules[check.key - 1].lessons.map((value, index) => {
                    return index >= 7 ? 
                      <AccardionTop
                        key={Math.random() * 10000}
                        theme={value.theme}
                        parts={value.parts}
                        index={index < 9 ? "0" + (index + 1) : index + 1}
                      /> : ""  
                    
                  })
                : ""
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
