import React from 'react';

function NavHeaderMain(props) {
    const style = {
        paddingLeft: '12px'
    };

    return (
        <div className="NavHeaderMain theme-heading" style={style}>
            {props.heading}
        </div>
    );
}

export default NavHeaderMain;
