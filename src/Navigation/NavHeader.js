import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavHeaderMain from './NavHeaderMain';
import './NavHeader.css';

function NavHeader(props) {
    return (
        <div className="NavHeader">
            <Switch>
                <Route exact path="/home" render={(routeProps) => <NavHeaderMain heading="Today" />} />
                <Route exact path="/food" render={(routeProps) => <NavHeaderMain heading="My Food" />}/>
                <Route exact path="/user" render={(routeProps) => <NavHeaderMain heading="Settings" />} />
            </Switch>
        </div>
    );
}

export default NavHeader;
