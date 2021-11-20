import React, { useState } from "react";
import BlogBox from "../../Asosiy qism/blogs/BlogBox";
import { HiOutlineRefresh } from "react-icons/hi";
import "./blogMiddle.scss";
function BlogMiddle(props) {
  const [load, setLoad] = useState(false);
  const loadButton = () => {
    setLoad((prev) => !prev);
  };
  return (
    <div className="blogMiddle">
      <div className="container">
        <div className="head">
          <div className="theme">
            <h1>So'ngi maqolalarimiz</h1>
            <img
              src="/images/Web Design01/section-3/Group 130.svg"
              width="66px"
              height="24px"
              alt=""
            />
          </div>
        </div>
      </div>
      <BlogBox />
      <div className="refresh">
        <button className="refresh-button" onClick={loadButton}>
          Yana yuklash 
          <HiOutlineRefresh className={!load ? "icon" : "icon update"} />
        </button>
      </div>
    </div>
  );
}

export default BlogMiddle;
