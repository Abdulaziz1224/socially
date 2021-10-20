import React from "react";
import { Link } from "react-router-dom";
import BlogBox from "../Asosiy qism/blogs/BlogBox";
import "./mainBottom.scss"

function MainBottom() {
  return (
    <div className="mainBottom">
      <div className="container">
        <div className="head">
          <div className="caption-text">
            <h2>O’xshash maqolalar</h2>
            <img src="/images/Web design01/section-3/Group 130.svg" alt="svg" />
          </div>
          <Link to="bloglar" className="allBlogs">
            <span>Barcha maqolalarimiz</span>
            <img
              src="/images/Asosiy Qism/available courses/arrow.svg"
              alt="arrow"
            />
          </Link>
        </div>
      </div>
      <BlogBox/>
    </div>
  );
}

export default MainBottom;
