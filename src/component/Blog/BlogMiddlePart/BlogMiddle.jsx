import React, { useEffect, useState } from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import axios from "axios";
import "./blogMiddle.scss";
// import BlogBox from "../../Asosiy qism/blogs/BlogBox";
import CardBlog from "./CardBlog";


function BlogMiddle(props) {
  const [load, setLoad] = useState(false);
  const [card, setCard] = useState("");
  const [offset, setoffset] = useState(0);
  const [loadB, setLoadB] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://socially.uz/api//v2/blog/all?size=9&offset=${offset}&sort=-1`
      )
      .then((res) => {
        setLoad((prev) => !prev);
        setCard([...card, ...res.data.data]);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoad((prev) => !prev);
  }, [loadB]);

  return (
    <div className="blogMiddle">
      {card === "" ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <>
          <CardBlog card={card} />
          <div className="refresh">
            <button
              className="refresh-button"
              onClick={() => {
                setoffset(offset + 9);
                setLoadB(loadB + 1);
              }}
            >
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
