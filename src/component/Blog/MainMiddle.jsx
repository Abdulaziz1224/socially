import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser";
import "./mainMiddle.scss";
function MainMiddle() {
  const { id } = useParams();
  const [post, setPost] = useState("");
  useEffect(() => {
    axios
      .get(`https://socially.uz/api//v2/blog/${id}`)
      .then((res) => {
        setPost(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  console.log(post);
  return (
    <>
      {post === "" ? (
        <h1
          style={{
            width: "100%",
            height: "100vh",
            margin: "auto",
            color: "black",
            textAlign: "center",
            position: "relative",
            top: "0",
          }}
        >
          Loading...
        </h1>
      ) : (
        <div className="mainMiddle">
          <div className="container">
            <div className="box">
              <div className="box-left">
                <img
                  src={`https://socially.uz/${post.imageUrl}`}
                  alt="img"
                  className="imageUrl"
                />
              </div>
              <div className="box-right">
                <div className="caption-text">
                  <div className="caption-text-top">
                    <span>Ismoil Safarov · 27.08.2021</span>
                    <br />
                  </div>
                  <div className="caption-text-bottom">
                    <p>{post.title}</p>
                  </div>
                </div>
                <div className="connecting">
                  <div className="link">
                    <Link
                      to={{
                        pathname: " https://t.me/sociallyuz",
                      }}
                      target="_blank"
                    >
                      <img
                        src="/images/Web Design01/footer/telegramblack.svg"
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
                        src="/images/Web Design01/footer/facebookblack.svg"
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
            <div className="post">
              <div className="post-text">
                {parse(
                  post.text.replaceAll(
                    `..`,
                    "https://socially.uz"
                  )
                )}
              </div>
              <div className="remember">
                <p>
                  <span>18.10.2020</span> <br />
                  Tajribada sinalgan juda oddiy uslub. Kuniga 10+ soat ishlab
                  h...
                </p>
                <p>
                  <span>18.10.2020</span>
                  <br />
                  Har qanday tanqidni qabul qiling!
                </p>
                <p>
                  <span>18.10.2020</span>
                  <br />
                  Adobe Illustrator’dan Logo & Branding tayyorlashda foydala...
                </p>
                <p>
                  <span>06.09.2020</span>
                  <br />
                  Kontrast qanday va nima uchun?
                </p>
                <p>
                  <span>05.08.2020</span>
                  <br />
                  Ranglarning ijtimoiy hayotdagi ta‘sir kuchi va
                  manipulyatsiyasi...
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MainMiddle;
