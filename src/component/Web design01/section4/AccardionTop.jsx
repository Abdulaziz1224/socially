import React, { useRef, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";

import "./section4.scss";

function AccardionTop(props) {
  const [activeClass, setActiveClass] = useState("");
  const [height, setHeight] = useState(0);
  const [rotateIcon, setRotateIcon] = useState("icon");
  const content = useRef(null);

  const toggleAccardion = () => {
    setActiveClass(activeClass === "" ? "active" : "");

    setHeight(
      activeClass === "active" ? "0" : `${content.current.scrollHeight}px`
    );
    setRotateIcon(activeClass === "active" ? "icon" : "icon rotate");
  };

  return (
    <div className="accardion-box-item">
      <div
        className={`accardion-box-item-top ${activeClass}`}
        onClick={toggleAccardion}
      >
        <div className="accardion-box-item-top-hover">
          <div className="text">
            <span>{props.number}</span>
            <br />
            <h4>{props.text}</h4>
          </div>
          <div>
            <BsArrowRightShort className={rotateIcon} />
          </div>
        </div>
      </div>
      <div
        className="accardion-box-item-bottom"
        ref={content}
        style={{ height: `${height}`}}
      >
        <ul>
          <li>
            <span></span> 01. Web design 01 kursiga kirish
          </li>
          <li>
            <span></span> 02. Dasturni ko'chirib olish
          </li>
          <li>
            <span></span> 03. Kirish oynasi
          </li>
        </ul>
        <img src="./images/section-3/shakllar.svg" alt="svg" />
      </div>
    </div>
  );
}

export default AccardionTop;
