import React from 'react';
import './FoodItemNone.css';

function FoodItemNone(props) {
    return (
        <div className="FoodItemNone">
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
