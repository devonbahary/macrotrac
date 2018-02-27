import React from 'react';
import { Link } from 'react-router-dom';

function ButtonBack(props) {
    const style = {
        textAlign: 'center'
    };

    return (
        <Link to={props.to} style={style}>
            <span className="ion-arrow-left-c txt-theme"></span>
        </Link>
    );
}

export default ButtonBack;
