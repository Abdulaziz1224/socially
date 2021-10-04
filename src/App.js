import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Design01 from "./component/Web design01/Design01/Design01";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Design01 />
      </Router>
    </div>
  );
} 

export default App;
