import React from "react";
import MainSection from "../mainSection/MainSection";
import Footer from "../../Web design01/Footer/Footer";
// import AvailableCourses from "../available courses/AvailableCourses";
import CardBlog from "../../Blog/BlogMiddlePart/CardBlog";
function Basis() {
  return (
    <div className="basis">
      <MainSection />
      {/* <AvailableCourses/> */}
      <CardBlog/>
      <Footer />
    </div>
  );
}

export default Basis;
