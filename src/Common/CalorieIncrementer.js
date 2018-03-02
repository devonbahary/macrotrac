import React from 'react';
import './CalorieIncrementer.css';

function CalorieIncrementer(props) {
    function incrementCalories() {
        props.onChange(props.value + 100);
    }

    function decrementCalories() {
        props.onChange(props.value - 100);
    }

    return (
        <div className="CalorieIncrementer">
            <div className="CalorieIncrementer-buttonContainer" onClick={decrementCalories}>
                <span className="CalorieIncrementer-buttonIcon ion-minus-round centered"></span>
            </div>
            <div className="CalorieIncrementer-calories">
                {props.value}
            </div>
            <div className="CalorieIncrementer-buttonContainer" onClick={incrementCalories}>
                <span className="CalorieIncrementer-buttonIcon ion-plus-round centered"></span>
            </div>
        </div>
    );
}

export default CalorieIncrementer;
