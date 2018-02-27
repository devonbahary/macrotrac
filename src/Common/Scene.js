import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavHeader from '../Navigation/NavHeader';
import NavFooter from '../Navigation/NavFooter';
import Home from '../Home';

function Scene(props) {
    return (
        <div className="Scene">
            <NavHeader />
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
            <NavFooter />
        </div>
    );
}

export default Scene;
