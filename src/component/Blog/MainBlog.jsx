import React from "react";
import Blog from "../Asosiy qism/blogs/Blog";
import Navbar from "../Navbar/Navbar";
import Footer from "../Web design01/Footer/Footer";
import "./mainBlog.scss";
import MainMiddle from "./MainMiddle";
function MainBlog() {
  return (
    <div className="mainBlog">
      <div className="mainNavbar">
        <Navbar />
      </div>
      <MainMiddle />
      <Blog />
      <Footer />
    </div>
  );
}

export default MainBlog;
