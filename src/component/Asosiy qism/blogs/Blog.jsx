import React from "react";
import { Link } from "react-router-dom";
import "./Blog.scss";
import BlogBox from "./BlogBox";

function Blog() {
  return (
    <div className="blogs">
      <div className="container">
        <div className="head">
          <div className="theme">
            <h1>Maqolalarimiz</h1>
            <div className="img"></div>
          </div>
          <div className="btn">
            <Link to="Blogs" className="allBlogs">
              <img
                src="/images/Asosiy Qism/available courses/arrow.svg"
                alt="arrow"
              />
            </Link>
            <div className="underline"></div>
          </div>
        </div>
      </div>
      <BlogBox />
    </div>
  );
}

export default Blog;
