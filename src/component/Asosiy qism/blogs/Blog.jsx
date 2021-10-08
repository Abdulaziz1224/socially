import React from "react";

import "./Blog.scss";
import BlogBox from "./BlogBox";

function Blog() {
  return (
    <div className="blogs">
      <div className="container">
        <div className="head">
          <div className="theme">
            <h1>So'ngi maqolalarimiz</h1>
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

          {/* <a href="Blogs" className="allBlogs">
            <img src="/images/Asosiy qism/available courses/arrow.svg" alt="arrow"/>
          </a> */}
        </div>
<<<<<<< HEAD
=======

        <div className="blogBox">
          {blog.map((obj) => {
            return <BlogCard
              img={window.innerWidth > 500
              ? obj.img
              : resBlog.img}
              text={window.innerWidth > 500
              ? obj.text
              : resBlog.text}
              date={window.innerWidth > 500
              ? obj.date
              : resBlog.date}/>
          })}
        </div>
>>>>>>> parent of c0a7fe5 (change)
      </div>
      <BlogBox />
    </div>
  );
}

export default Blog;
