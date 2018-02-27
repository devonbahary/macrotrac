import React from 'react';

function ButtonAdd(props) {
    const style = {
        position: 'fixed',
        top: '0',
        right: '0',
        height: '3rem',
        width: '3rem',
        textAlign: 'center',
        fontSize: '1.4rem',
        zIndex: '1',
        color: 'white'
    };

    return (
        <div className="ButtonAdd" style={style} onClick={props.onClick}>
            <span className="ion-plus-round centered"></span>
        </div>
    );
}

export default ButtonAdd;
