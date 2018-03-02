import React from 'react';
import './FoodItemNone.css';

function FoodItemNone(props) {
    const style = props.onClick ? {cursor: 'pointer'} : null;
    
    return (
        <div className="FoodItemNone" onClick={props.onClick} style={style}>
            <div className="FoodItemNone-img">
                <span className="ion-close-round centered txt-theme"></span>
            </div>
            <div className="FoodItemNone-txt">
                No food found.
            </div>
        </div>
    );
}

export default FoodItemNone;
