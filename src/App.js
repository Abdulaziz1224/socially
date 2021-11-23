import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
// import Design01 from "./component/Web design01/Design01/Design01";
import Basis from "./component/Asosiy qism/Basis/Basis";
import Kurs from "./component/Kurs/Kurs";
import BlogPart from "./component/Blog/BlogPart";
import MobileForm from "./component/Form/MobileForm";
import Profil from "./component/Profil/Profil";
import Video from "./component/Video/Video";
import MainBlog from "./component/Blog/MainBlog";
import "./app.scss";

function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path="/" exact component={Basis} />
                    <Route path="/kurslar" component={Kurs} />
                    <Route path="/bloglar" exact component={BlogPart} />
                    {/* <Route path="/design"  component={Design01} /> */}
                    <Route path="/mobileForm" component={MobileForm} />
                    <Route path="/profil" component={Profil} />
                    <Route path="/video" component={Video} />
                    <Route path="/bloglar/:id" component={MainBlog} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
