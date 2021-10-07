import React from "react";

import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Design01 from "./component/Web design01/Design01/Design01";
import "./app.scss";
import Basis from "./component/Asosiy qism/Basis/Basis";

import AuthNumber from "./component/Form/AuthNumber";
import Login from "./component/Form/Login";
import Register from "./component/Form/Register";
import Number from "./component/Form/Number";


function App() {
  return (
    <div className="app">

      <Router>
        <Switch> 
        {/* <Basis /> */}
        <Design01 />
        {/* <BasicPart /> */}
        </Switch>
        <Route path="/authNumber" component={AuthNumber} />
        <Route path="/number" component={Number} />
        <Route path="/login" component={Login} />
        <Route path="/Register" component={Register} />
      </Router>
    </div>
  );
}

export default App;
