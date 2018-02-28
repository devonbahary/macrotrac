import React from 'react';
import './FoodItemServingInput.css';

function FoodItemServingInput(props) {
    function handleChange(e) {
        props.onChange(e, props.food);
    }

    return (
        <div className="FoodItemServingInput">
            <div className="FoodItemServingInput-label">
                Serving Size
            </div>
            <input type="number" value={props.value} onChange={handleChange} />
        </div>
    );
}

export default FoodItemServingInput;
