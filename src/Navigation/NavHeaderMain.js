import React from 'react';
import ButtonAdd from './ButtonAdd';

function NavHeaderMain(props) {
    const style = {
        display: 'grid',
        gridTemplateColumns: '1fr 3rem',
        paddingLeft: '12px'
    };

    const buttonAdd = props.to ? <ButtonAdd to={props.to} /> : null;

    return (
        <div className="NavHeaderMain theme-heading" style={style}>
            <div>
                {props.heading}
            </div>
            {buttonAdd}
        </div>
    );
}

export default NavHeaderMain;
