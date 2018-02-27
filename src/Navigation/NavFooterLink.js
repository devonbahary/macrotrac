import React from 'react';
import { NavLink } from 'react-router-dom';

function NavFooterLink(props) {
    const navIconClass = props.iconClass + " centered";

    return (
        <NavLink to={props.to} className="NavFooter-NavLink" activeClassName="txt-theme">
            <span className={navIconClass}></span>
        </NavLink>
    );
}

export default NavFooterLink;
