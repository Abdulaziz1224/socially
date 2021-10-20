import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Web design01/Footer/Footer";
import "./mainBlog.scss";
import MainBottom from "./MainBottom";
import MainMiddle from "./MainMiddle";
function MainBlog() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="mainBlog">
      <div className="mainNavbar">
        <Navbar />
      </div>
      <MainMiddle />
      <MainBottom />
      <Footer />
    </div>
  );
}

export default MainBlog;
