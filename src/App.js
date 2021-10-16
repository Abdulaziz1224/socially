import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Design01 from "./component/Web design01/Design01/Design01";
import Basis from "./component/Asosiy qism/Basis/Basis";
import Kurs from "./component/Kurs/Kurs";
import BlogPart from "./component/Blog/BlogPart";
import MobileForm from "./component/Form/MobileForm";
import Profil from "./component/Profil/Profil";
import Video from "./component/Video/Video"
import MainBlog from "./component/Blog/MainBlog"
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact strict component={Basis} />
          <Route path="/kurslar" exact strict component={Kurs} />
          <Route path="/bloglar" exact strict component={BlogPart} />
          <Route path="/design" exact strict component={Design01} />
          <Route path="/mobileForm" exact strict component={MobileForm} />
          <Route path="/profil" exact strict component={Profil} /> 
          <Route path="/video" exact strict component={Video} /> 
          <Route path="/ablog" exact strict component={MainBlog} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
