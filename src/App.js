import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Design01 from "./component/Web design01/Design01/Design01";
import AvailableCourses from "./component/Asosiy qism/available courses/AvailableCourses";
import "./app.scss";
import Blog from "./component/Asosiy qism/blogs/Blog";

function App() {
  return (
    <div className="app">
      {/* <Router>
        <Design01 />
      </Router> */}
      <AvailableCourses />
      <Blog />
    </div>
  );
} 

export default App;
