import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Design01 from "./component/Web design01/Design01/Design01";
import Basis from "./component/Asosiy qism/Basis/Basis";
import Kurs from "./component/Kurs/Kurs";
import BlogPart from "./component/Blog/BlogPart";
import MainBlog from "./component/Blog/MainBlog";
import Profil from "./component/Profil/Profil"
import "./app.scss";
import Modal from "./component/Profil/Modal";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          {/* <Route path="/" exact strict component={Basis} />
          <Route path="/kurslar" exact strict component={Kurs} />
          <Route path="/bloglar" exact strict component={BlogPart} />
          <Route path="/design" exact strict component={Design01} /> */}
          {/* <MainBlog/> */}
          <Profil/>
          <Modal/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
