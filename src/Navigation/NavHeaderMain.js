import React from 'react';
import ButtonAdd from './ButtonAdd';

function NavHeaderMain(props) {
    const style = {
        display: 'grid',
        gridTemplateColumns: '1fr 3rem',
        paddingLeft: '12px'
    };

    return (
        <div className="NavHeaderMain theme-heading" style={style}>
            <div>
                {props.heading}
            </div>
            <ButtonAdd to="/" />
        </div>
    );
}

export default NavHeaderMain;
