import React from "react";
import MainSection from "../mainSection/MainSection";
import Footer from "../../Web design01/Footer/Footer";
import BlogMiddle from "../../Blog/BlogMiddlePart/BlogMiddle";
import KursMiddle from "../../Kurs/kursMiddlePart/KursMiddle";
function Basis() {
  return (
    <div className="basis">
      <MainSection />
      <KursMiddle />
      <BlogMiddle/>
      <Footer />
    </div>
  );
}

export default Basis;
