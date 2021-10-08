import React from "react";

function BlogCard(props) {
  return (
    <div className="card">
      <img src={props.img} alt="blogImage" />
      <div className="textAndDate">
        <h2 className="text">{props.text}</h2>
        <p className="date">{props.date}</p>
      </div>
    </div>
  );
}

export default BlogCard;
