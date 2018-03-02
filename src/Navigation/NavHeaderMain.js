import React from 'react';

function NavHeaderMain(props) {
    const style = {
        paddingLeft: '12px',
        height: '100%'
    };

    return (
        <div className="NavHeaderMain theme-heading" style={style}>
            <div>
                {props.heading}
            </div>
        </div>
    );
}

export default NavHeaderMain;
