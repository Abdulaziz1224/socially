import React from "react";
import { Link } from "react-router-dom";
import "./mainMiddle.scss";
function MainMiddle() {
  return (
    <div className="mainMiddle">
      <div className="container">
        <div className="box1">
          <div className="box-left">
            <img src="/images/Blog/MainBox/image 1.png" alt="img" />
          </div>
          <div className="box-right">
            <div className="caption-text">
              <div className="caption-text-top">
                <img src="/images/Blog/MainBox/Ismoil Safarov.png" alt="img" />
                <span>Ismoil Safarov · 27.08.2021</span>
              </div>
              <div className="caption-text-bottom">
                <p>
                  Bilishingiz kerak bo'lgan Web Design'ning 7 xil turdagi
                  stillari
                </p>
              </div>
            </div>
            <div className="connecting">
              <div className="link">
                <Link
                  to={{
                    pathname: "https://www.instagram.com/sociallyuz/",
                  }}
                  target="_blank"
                >
                  <img
                    src="/images/Web Design01/footer/instagram.svg"
                    alt="instagram"
                  />
                </Link>
              </div>

              <div className="link">
                <Link
                  to={{
                    pathname: " https://t.me/sociallyuz",
                  }}
                  target="_blank"
                >
                  <img
                    src="/images/Web Design01/footer/telegram.svg"
                    alt="instagram"
                  />
                </Link>
              </div>
              <div className="link">
                <Link
                  to={{
                    pathname: " https://t.me/sociallyuz",
                  }}
                  target="_blank"
                >
                  <img
                    src="/images/Web Design01/footer/facebook.svg"
                    alt="instagram"
                  />
                </Link>
              </div>
              <div className="link">
                <Link
                  to={{
                    pathname: " https://t.me/sociallyuz",
                  }}
                  target="_blank"
                >
                  <img
                    src="/images/Web Design01/footer/Frame.svg"
                    alt="instagram"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="box2">
          <img src="/images/Blog/MainBox/image 2.png" alt="" />
          <p>
            Yaxshi dizayner uslubga ega bo’lishi kerak. Turli xil muammolar
            turli xil yechimlarni talab qiladi. Har bir uslub nimaligini
            tushunib oling va uni tegishli paytda tavsiya qilishingiz mumkin.
          </p>
        </div>
        <div className="box">
          <img src="/images/Blog/MainBox/image 3.png" alt="" />
        </div>
        <div className="box">
          <img src="/images/Blog/MainBox/image 4.png" alt="" />
        </div>
        <div className="box">
          <img src="/images/Blog/MainBox/image 5.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default MainMiddle;
