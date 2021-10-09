import React from "react";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import Design01 from "./component/Web design01/Design01/Design01";
import Basis from "./component/Asosiy qism/Basis/Basis";
import Kurs from "./component/Kurs/Kurs";
import BlogPart from "./component/Blog/BlogPart";
import MainBlog from "./component/Blog/MainBlog";
import Navbar from "./component/Navbar/Navbar";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Router>
        {/* <Switch> */}
        {/* <Design01 /> */}
        {/* <Basis /> */}
        {/* <Kurs/> */}
        {/* <BlogPart/> */}
        {/* <Navbar/> */}
        <MainBlog />
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
