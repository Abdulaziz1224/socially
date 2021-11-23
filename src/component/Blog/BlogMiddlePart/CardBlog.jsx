import React from "react";
import { Link } from "react-router-dom";
import "./cardBlog.scss";

function CardBlog(props) {
  let card = props.card;
  console.log(card);
  return (
    <>
      {card === undefined ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <div className="cardBlog">
          <div className="blogText">
            <p className="captionText">
              Maqolalar <span className="line"></span>
            </p>
          </div>
          <div className="blogs">
            {card.map((card, index) => {
              return (
                <Link
                  to={`/bloglar/${card.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                  key={index}
                >
                  <div className="card">
                    <img
                      src={`https://socially.uz/${card.imageUrl}`}
                      alt="img"
                      className="imgInCard"
                    />
                    <div className="titleText">
                      <span className="text">{card.title}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default CardBlog;
