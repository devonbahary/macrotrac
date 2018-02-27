import React from 'react';
import NavFooterLink from './NavFooterLink';
import './NavFooter.css';

function NavFooter(props) {
    return (
        <div className="NavFooter bg-light">
            <NavFooterLink to="/home" iconClass="ion-home" />
            <NavFooterLink to="/food" iconClass="ion-fork" />
            <NavFooterLink to="/user" iconClass="ion-person" />
        </div>
    );
}

export default NavFooter;
