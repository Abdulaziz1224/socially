import React from "react";
import { useState, useRef, useEffect, useContext } from "react";
import { ModulContext } from "../Modul/Modul";

function Topic({ number, topic, theme }) {
  const { modul } = useContext(ModulContext);

  const [activeClass, setActiveClass] = useState("");
  const [height, setHeight] = useState("0");
  const [rotateIcon, setRotateIcon] = useState("icon");
  const content = useRef(null);
  const size = useRef(null);

  useEffect(() => {
    setHeight(0);
  }, [modul]);

  const toggleAccardion = () => {
    console.log(content.current.scrollHeight);
    setActiveClass(activeClass === "" ? "active" : "");

    setHeight(height === 0 ? `${content.current.scrollHeight}px` : 0);
    setRotateIcon(activeClass === "active" ? "icon" : "icon rotate");
  };

  return (
    <div
      className={`topic ${activeClass}`}
      // style={{height:minheight}}
    >
      <div className="head" onClick={toggleAccardion}>
        <div className="title">
          <h3 className="topic-number">{number}</h3>
          <h3>{topic}</h3>
        </div>
        <img
          src="images/videoCourse/topicArrow.svg"
          alt=""
          style={{
            transform: `rotate(${activeClass === "" ? "0deg" : "90deg"})`,
          }}
        />
      </div>
      <div
        className="topic-bottom"
        ref={content}
        style={{ height: `${height}` }}
      >
        <div className="midleLine"></div>
        <div className="lesson-list" ref={size}>
          {theme.map((obj) => {
            return (
              <div className="theme" key={theme.indexOf(obj)}>
                <img
                  src={
                    theme[theme.indexOf(obj)].lock
                      ? "images/videoCourse/lock.svg"
                      : "images/videoCourse/unlock.svg"
                  }
                  alt=""
                  className="lock"
                />
                <div className="numAndTitle">
                  <span>{theme[theme.indexOf(obj)].themeNumber}</span>
                  <h3 className="theme-title">
                    {theme[theme.indexOf(obj)].label}
                  </h3>
                </div>
              </div>
            );
          })}
          <img
            src="images/Web Design01/section-3/shakllar.svg"
            alt="img"
            className="indexImg"
          />
        </div>
      </div>
    </div>
  );
}

export default Topic;
