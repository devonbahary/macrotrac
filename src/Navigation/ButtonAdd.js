import React from 'react';
import { Link } from 'react-router-dom';

function ButtonAdd(props) {
    const style = {
        textAlign: 'center',
        color: 'white'
    };

    return (
        <Link to={props.to} style={style}>
            <span className="ion-plus-round"></span>
        </Link>
    );
}

export default ButtonAdd;
