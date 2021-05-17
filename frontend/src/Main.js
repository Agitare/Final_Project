import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import Content from "./Content";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                <h1>Header</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/Content">Content</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/Content" component={Content}/>
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;