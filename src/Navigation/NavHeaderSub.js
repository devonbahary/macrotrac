import React from 'react';
import ButtonBack from './ButtonBack';

function NavHeaderSub(props) {
    const style = {
        display: 'grid',
        gridTemplateColumns: '3rem 1fr'
    };

    return (
        <div className="NavHeaderSub bg-light" style={style}>
            <ButtonBack to={props.to} />
            <div>
                {props.heading}
            </div>
        </div>
    );
}

export default NavHeaderSub;
