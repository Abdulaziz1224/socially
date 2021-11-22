import React, { useEffect, useState } from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import axios from "axios";
import "./blogMiddle.scss";
// import BlogBox from "../../Asosiy qism/blogs/BlogBox";
import CardBlog from "./CardBlog";
function BlogMiddle(props) {
  const [load, setLoad] = useState(false);
  const [card, setCard] = useState("");
  const [newCard, setNewCard] = useState([]);
  let offset = 0;
  const loadButton = () => {
    offset = offset + 9;
    axios
      .get(
        `https://socially.uz/api//v2/blog/all?size=9&offset=${offset}&sort=-1`
      )
      .then((res) => {
        setNewCard(res.data.data);
        setLoad((prev) => !prev);
        setCard([...card, ...newCard]);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoad((prev) => !prev);
  };
  useEffect(() => {
    axios
      .get("https://socially.uz/api//v2/blog/all?size=9&offset=0&sort=-1")
      .then((res) => {
        setCard(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [offset]);
  return (
    <div className="blogMiddle">
      {card === "" ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <>
          <CardBlog card={card} />
          <div className="refresh">
            <button className="refresh-button" onClick={loadButton}>
              Yana yuklash
              <HiOutlineRefresh className={!load ? "icon" : "icon update"} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default BlogMiddle;
