import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import AvailableBox from "../../Asosiy qism/available courses/AvailableBox";
import PropagateLoader from "react-spinners/PropagateLoader";
import "./kursMiddle.scss"

function KursMiddle() {
  const [courses, setCourses] = useState([]);
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    setLoader(true)
    axios
      .get(
        "https://socially2.herokuapp.com/v2/course/public/all?size=3&offset=0&sort=-1"  
      )
      .then((res) => {
        setCourses(res.data.data);
        console.log(res.data.data);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="kursMiddle">
      {loader ? (
        <PropagateLoader color="rgba(255, 171, 0, 1)" />
      ) : (
        <div className="afterLoad">
          <div className="kursMiddle-text">
            <div className="container">
              <div className="col head">
                <div className="title">
                  <h1>KURSLAR</h1>
                  <div className="line"></div>
                </div>
              </div>
            </div>
          </div>
          <AvailableBox courses={courses} />
        </div>
      )}
    </div>
  );
}

export default KursMiddle;
