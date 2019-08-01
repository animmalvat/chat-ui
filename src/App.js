import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./login";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Signup from "./signup";

function App() {
    return (
        <div>
            <Router>
                <Route exact path="/" component={Login} />
                <Route path="/signup" component={Signup} />
            </Router>
        </div>
    );
}

export default App;
