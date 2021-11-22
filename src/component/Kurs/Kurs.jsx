import React, { useEffect } from "react";
import KursTop from "./kursTop/KursTop";
import KursMiddle from "./kursMiddlePart/KursMiddle"
import Footer from "../Web design01/Footer/Footer";
function Kurs() {

  useEffect( () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }, [])
  return (
    <div className="kurs">
      <KursTop />
      <KursMiddle />
      <Footer />
    </div>
  );
}

export default Kurs;
