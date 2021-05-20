import "./App.css";
import Info from "./components/Info/Info";
import Skill from "./components/Skill/Skill";
import Product from "./components/Product/Product";
import Preference from "./components/Preference/Preference";
import React from "react";
import { NavLink, HashRouter, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <header className="app-header">
          <NavLink to="/" className="app-logo">
            이태형
          </NavLink>
          <div className="app-nav">
            <NavLink to="/Product" className="nav-item">
              제품
            </NavLink>
            <NavLink to="/Skill" className="nav-item">
              기술
            </NavLink>
            <NavLink to="/Preference" className="nav-item">
              취향
            </NavLink>
          </div>
        </header>
        <div className="main-contents">
          <Route exact path="/" component={Info}></Route>
          <Route path="/Product" component={Product}></Route>
          <Route path="/Skill" component={Skill}></Route>
          <Route path="/Preference" component={Preference}></Route>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
