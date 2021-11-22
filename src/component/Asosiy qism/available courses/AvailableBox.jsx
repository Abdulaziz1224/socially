import React, { useEffect, useRef, useState } from "react";
import "./availableBox.scss";
import { Link } from "react-router-dom";
import axios from "axios";

function AvailableBox() {
  const [courses, setCourses] = useState([]);
  const [scroll, setScroll] = useState(0);
  const card = useRef(null);

  useEffect(() => {
    axios
      .get(
        "https://socially2.herokuapp.com/v2/course/public/all?size=3&offset=0&sort=-1"
      )
      .then((res) => {
        setCourses(res.data.data);
        console.log(res.data.data[0].title.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="availableBox">
      {courses.map((course) => {
        // if (courses.indexOf(course) === 2 || courses.indexOf(course) === 0)
        return (
          <div
            className="card"
            // onMouseOver={() => {
            //   setScroll(`translate(0,-${card.current.scrollHeight-386}px)`);
            // }}
            // onMouseLeave={()=>{
            //   setScroll(`translate(0,0)`);
            // }}
            // style={{transform:scroll}}
            // ref={card}
          >
            <img
              className="card-img"
              src={`https://socially.uz/${course.imageUrl}`}
              alt=""
            />
            <h1 className="card-title">
              {course.title.length > 20
                ? course.title.slice(0, 20)
                : course.title}
            </h1>
            <div className="profile">
              <img
                src="images/Asosiy Qism/available courses/avatar.svg"
                alt=""
              />
              <p className="name">Ismoil Safarov</p>
            </div>
            <p className="text">
              {course.description.length > 60
                ? course.description.slice(0, 60) + "..."
                : course.description}
            </p>
            <Link to="video" className="full-info">
              Batafsil maʼlumot
              <img
                src="/images/Asosiy Qism/available courses/arrow.svg"
                alt=""
              />
            </Link>
          </div>
        );
      })}

      {/* <div className="card">
        <img
          className="card-img"
          src="/images/Asosiy Qism/available courses/image 12.png"
          alt=""
        />
        <div>
          <h1 className="card-title">Web Design 01</h1>
          <div className="profile">
            <img src="images/Asosiy Qism/available courses/avatar.svg" alt="" />
            <p className="name">Ismoil Safarov</p>
          </div>
          <p className="text">
            UX/UI & Web Design bo‘yicha professional onlayn video kurs. Turli...
          </p>
          <Link to="video" className="full-info">
            Batafsil maʼlumot
            <img src="/images/Asosiy Qism/available courses/arrow.svg" alt="" />
          </Link>
        </div>
      </div> */}

      {/* <div className="card">
        <img
          className="card-img"
          src="/images/Asosiy Qism/available courses/image 12.png"
          alt=""
        />
        <h1 className="card-title">Web Design 01</h1>
        <div className="profile">
          <img src="images/Asosiy Qism/available courses/avatar.svg" alt="" />
          <p className="name">Ismoil Safarov</p>
        </div>
        <p className="text">
          UX/UI & Web Design bo‘yicha professional onlayn video kurs. Turli...
        </p>
        <Link to="video" className="full-info">
          Batafsil maʼlumot
          <img src="/images/Asosiy Qism/available courses/arrow.svg" alt="" />
        </Link>
      </div> */}
    </div>
  );
}

export default AvailableBox;
