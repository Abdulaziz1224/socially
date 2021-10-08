import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Design01 from "./component/Web design01/Design01/Design01";
// import Basis from "./component/Asosiy qism/Basis/Basis";
import Kurs from "./component/Kurs/Kurs";
import "./app.scss";

import Number from "./component/Form/Number";
import AuthNumber from "./component/Form/AuthNumber";
import Login from "./component/Form/Login";
import Register from "./component/Form/Register";

function App() {
  return (
    <div className="app">

      <Router>
        {/* <Switch> */}

        {/* <Design01 /> */}
        {/* <Basis /> */}
        <Kurs/>
        {/* </Switch> */}
        <Route path="/number"  component={Number}/>
        <Route path="/authNumber"  component={AuthNumber}/>
        <Route path="/login"  component={Login}/>
        <Route path="/register"  component={Register}/>
      </Router>
    </div>
  );
}

export default App;
