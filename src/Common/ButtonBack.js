import React from 'react';

function ButtonBack(props) {
    const style = {
        textAlign: 'center',
        cursor: 'pointer'
    };

    return (
        <div className="ButtonBack"style={style} onClick={props.onClick}>
            <span className="ion-arrow-left-c txt-theme"></span>
        </div>
    );
}

export default ButtonBack;
