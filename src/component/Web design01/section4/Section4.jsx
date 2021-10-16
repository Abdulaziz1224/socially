import React, { useRef } from "react";
import AccardionTop from "./AccardionTop";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import "./section4.scss";

function Section4() {
  const [check, setCheck] = useState({ text: "1-modul o'quv dasturi", key: 1 });
  const [heights, setHeights] = useState(0);
  const contentTablet = useRef(null);
  const contentMobile = useRef(null);
  const toggle = () => {
    if (window.innerWidth > 767) {
      setHeights(heights === 0 ? `${contentTablet.current.scrollHeight}px` : 0);
    } else {
      setHeights(heights === 0 ? `${contentMobile.current.scrollHeight}px` : 0);
    }
  };

  const text = [
    "Kursga kirish",
    "Ko’p qo’llanuvchi asboblar",
    "Murakkab imkoniyatli asboblar",
    "Ko’p funksiyali imkoniyatlar",
    "Maxsus bo’limlar",
    "Adobe XD amaliyotlari",
    "Figmaga kirish",
    "Ko’p qo’llanuvchi asboblar",
    "Muhim funksiyalar va bo’limlar",
    "Maxsus imkoniyatlar",
    "Wireframe nima?",
    "Low fidelity wireframe",
    "High fidelity wireframe",
  ];
  const number = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
  ];

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
            <AccardionTop text={text[0]} number={number[0]} />
            <AccardionTop text={text[1]} number={number[1]} />
            <AccardionTop text={text[2]} number={number[2]} />
            <AccardionTop text={text[3]} number={number[3]} />
            <AccardionTop text={text[4]} number={number[4]} />
            <AccardionTop text={text[5]} number={number[5]} />
            <AccardionTop text={text[6]} number={number[6]} />
          </div>
          <div className="accardion-box-right">
            <AccardionTop text={text[7]} number={number[7]} />
            <AccardionTop text={text[8]} number={number[8]} />
            <AccardionTop text={text[9]} number={number[9]} />
            <AccardionTop text={text[10]} number={number[10]} />
            <AccardionTop text={text[11]} number={number[11]} />
            <AccardionTop text={text[12]} number={number[12]} />
          </div>
        </div>

        <div className="Caption-box">
          <div className="col-6">
            <div className="curriculum mobile">
              <div className="selected" onClick={toggle}>
                <p className="textOption">{check.text}</p>
                <div className={heights === 0 ? "rotate up" : "rotate down"}>
                  <IoIosArrowDown className="arrowDown" />
                </div>
              </div>
              <div
                className="options"
                ref={contentMobile}
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
      </div>
    </div>
  );
}

export default Section4;
