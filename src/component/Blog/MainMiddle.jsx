import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
  console.log(post.text);
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
                 {/* { (eval(post.text))}       */}
              </div>
              <div className="remember"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MainMiddle;
