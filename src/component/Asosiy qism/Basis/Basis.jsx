import React from "react";
import MainSection from "../mainSection/MainSection";
import MainSection1 from "../mainSection1/MainSection1";
import Footer from "../../Web design01/Footer/Footer";
import AvailableCourses from "../available courses/AvailableCourses";
import Blog from "../blogs/Blog";
function Basis() {
  return (
    <div className="basis">
      <MainSection />
      <MainSection1 />
      <AvailableCourses/>
      <Blog/>
      <Footer />
    </div>
  );
}

export default Basis;
