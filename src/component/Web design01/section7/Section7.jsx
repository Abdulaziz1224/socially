import React from "react";
import "./section7.scss";
import { useState, useEffect } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
function Section7() {
  // const [next, setNext] = useState("");
  const [prev, setPrev] = useState("prevImg");
  const [count, setCount] = useState(3);
  const [oppocity, setOppocity] = useState(1);
  const [margin,setMargin] = useState(25.769)

  const [imgSrc, setimgSrc] = useState([
    "/images/Web Design01/section-7/Rectangle 114.png",
    "/images/Web Design01/section-7/Rectangle 115.png",
    "/images/Web Design01/section-7/Rectangle 116.png",
    "/images/Web Design01/section-7/Rectangle 117.png",
    "a",
    "s"
  ])

  useEffect(() => {
    if(window.innerWidth>1600){
      setMargin(22.1)
    }

    if(window.innerWidth>2000){
      setMargin(18.6)
    }
  }, [])
  

  const nextImage = () => {
    if(count<imgSrc.length){
      setCount(count+1)
    }
    if(count===imgSrc.length-1 || count===imgSrc.length){
      setOppocity(0.3)
    }else{
      setOppocity(1)
    }
  };
  const prevImage = () => {
    if(count>3){
      setCount(count-1)
    }

    if(count!==imgSrc.length-1){
      setOppocity(1)
    }
  };

  return ( 
    <div className="section7">
      <div className="container">
        <div className="col">
          <div className="Caption">
            <h3 className="Caption-text">
              Kursda o‘qigan o‘quvchilarimiz natijalari
            </h3>
            <img src="/images/Web Design01/section-3/Group 130.svg" alt="svg" />
          </div>
          <div className="carousel-control">
            <button
              onClick={prevImage}
              id="prev"
              className={"prev " + prev}
              style={{ opacity: count===3?0.3:1 }}
            >
              <BsArrowLeftShort />
            </button>
            <button
              onClick={nextImage}
              id="next"
              className={"next"}
              style={{ opacity: oppocity }}
            >
              <BsArrowRightShort />
            </button>
          </div>
        </div>
        <div className="Carousel">
          <div className="Carousel-slide">
            <div
              className={"slide-box "}
              style={{ marginLeft: "-" + (count-3)*margin + "vw" }}
            >
              {imgSrc.map((src)=>{
                return <img src={imgSrc[imgSrc.indexOf(src)]} key={imgSrc.indexOf(src)} alt="" />
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7;
