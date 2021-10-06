import React from "react";

import { BrowserRouter as Router, Switch } from "react-router-dom";
// import Design01 from "./component/Web design01/Design01/Design01";
import "./app.scss";
import Basis from "./component/Asosiy qism/Basis/Basis";

function App() {
  return (
    <div className="app">

      <Router>
        {/* <Switch> */}
        <Basis />
        {/* <Design01 /> */}
        {/* <BasicPart /> */}
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
