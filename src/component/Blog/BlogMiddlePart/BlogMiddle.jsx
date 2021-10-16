import React from "react";
import BlogBox from "../../Asosiy qism/blogs/BlogBox";
import "./blogMiddle.scss";
function BlogMiddle(props) {
  return (
    <div className="blogMiddle">
      <div className="container">
        <div className="head">
          <div className="theme">
            <h1>So'ngi maqolalarimiz</h1>
            <img src="/images/Web Design01/section-3/Group 130.svg" width="66px" height="24px" alt="" />
          </div>
        </div>
      </div>
      <BlogBox />
    </div>
  );
}

export default BlogMiddle;
