import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavHeader from '../Navigation/NavHeader';
import NavFooter from '../Navigation/NavFooter';
import Home from '../Home';
import Food from '../Food';

function Scene(props) {
    return (
        <div className="Scene">
            <NavHeader />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/food" component={Food} />
            </Switch>
            <NavFooter />
        </div>
    );
}

export default Scene;
