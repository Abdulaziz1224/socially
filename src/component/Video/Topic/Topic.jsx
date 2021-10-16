import React from 'react'
import {useState, useRef, useEffect, useContext} from "react"
import {ModulContext} from "../Modul/Modul"

function Topic({number, topic, theme}) {

  const {modul} = useContext(ModulContext)

  const [activeClass,
    setActiveClass] = useState("");
  const [height,
    setHeight] = useState("99px");
  const [rotateIcon,
    setRotateIcon] = useState("icon");
  const content = useRef(null);
  const size = useRef(null)

  useEffect(() => {
    setHeight(`${size.current.scrollHeight}px`)
  }, [modul])

  const toggleAccardion = () => {
    console.log(size.current.scrollHeight);
    setActiveClass(activeClass === ""
      ? "active"
      : ""); 

    setHeight(activeClass === "active"
      ? `${size.current.scrollHeight}px`
      : `${content.current.scrollHeight}px`);
    setRotateIcon(activeClass === "active"
      ? "icon"
      : "icon rotate");
  };

  return (
    <div
      className={`topic ${activeClass}`}  
      ref={content} style={{height: `${height}`}}
    >
      <div className="head" onClick={toggleAccardion} ref={size}>
        <div className="title">
          <h3 className="topic-number">{number}</h3>
          <h3>{topic}</h3>
        </div>
        <img 
          src="images/videoCourse/topicArrow.svg" 
          alt=""
          style={{transform:`rotate(${activeClass==""?"0deg":"90deg"})`}}
          />
      </div>
      <div className="midleLine" ></div>
      <div className="lesson-list">
        {theme.map((obj) => {
          return (
            <div className="theme" key={theme.indexOf(obj)}>
              <img
                src={theme[theme.indexOf(obj)].lock
                ? "images/videoCourse/lock.svg"
                : "images/videoCourse/unlock.svg"}
                alt=""
                className="lock"/>
              <div className="numAndTitle">
                <span>{theme[theme.indexOf(obj)].themeNumber}</span>
                <h3 className="theme-title">{theme[theme.indexOf(obj)].label}</h3>
              </div>
            </div>
          )
        })
}
      </div>
    </div>
  )
}

export default Topic
