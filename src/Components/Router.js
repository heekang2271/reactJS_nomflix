import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Header from "./Header.js";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Detail from "../Routes/Detail";
import Search from "../Routes/Search";


export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/tv/popular" exact component={() => <h1>Popular</h1>} />
            <Route path="/search" exact component={Search} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
)