import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from '../Routes/Home.js'
import TV from '../Routes/TV.js'
import Search from '../Routes/Search.js'
import Header from './Header.js';


export default () => (
    <Router>
        <Header></Header>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/tv/popular" exact render={() => <h1>Popular</h1>} />
            <Route path="/search" exact component={Search} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
)