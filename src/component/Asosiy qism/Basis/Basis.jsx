import React from "react";
import MainSection from "../mainSection/MainSection";
import Footer from "../../Web design01/Footer/Footer";
import AvailableCourses from "../available courses/AvailableCourses";
import Blog from "../blogs/Blog";
function Basis() {
  return (
    <div className="basis">
      <MainSection />
      <AvailableCourses/>
      <Blog/>
      <Footer />
    </div>
  );
}

export default Basis;
