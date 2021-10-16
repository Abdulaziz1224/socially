import React from "react";
import { useHistory } from "react-router-dom";

function BlogCard(props) {
  let history = useHistory();

  function redirect() {
    history.push("/ablog");
  }
  return (
    <div className="card" onClick={redirect}>
      <img src={props.img} alt="blogImage" />
      <div className="textAndDate">
        <h2 className="text">{props.text}</h2>
        <p className="date">{props.date}</p>
      </div>
    </div>
  );
}

export default BlogCard;
