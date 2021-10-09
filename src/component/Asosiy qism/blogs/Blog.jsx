import React from "react";

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
            <a href="Blogs" className="allBlogs">
              <img
                src="/images/Asosiy Qism/available courses/arrow.svg"
                alt="arrow"
              />
            </a>
            <div className="underline"></div>
          </div>
        </div>
      </div>
      <BlogBox />
    </div>
  );
}

export default Blog;
