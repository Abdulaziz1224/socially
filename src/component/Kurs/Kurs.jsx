import React from "react";
import KursTop from "./kursTop/KursTop";
import KursMiddle from "./kursMiddlePart/KursMiddle"
import Footer from "../Web design01/Footer/Footer";
function Kurs() {
  return (
    <div className="kurs">
      <KursTop />
      <KursMiddle/>
      <Footer/>
    </div>
  );
}

export default Kurs;
