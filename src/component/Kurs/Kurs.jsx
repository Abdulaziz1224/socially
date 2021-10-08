import React from "react";
import KursTop from "./kursTop/KursTop";
import AvailableBox from "../Asosiy qism/available courses/AvailableBox";
import Footer from "../Web design01/Footer/Footer";
function Kurs() {
  return (
    <div className="kurs">
      <KursTop />
      <AvailableBox />
      <Footer/>
    </div>
  );
}

export default Kurs;
