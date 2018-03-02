import React from 'react';
import { calcCals } from '../utils';
import './TotalCalories.css';

function TotalCalories(props) {
    let calorieElement;
    if (props.asInput) {
        calorieElement = <input type="number" value={props.value} onChange={props.onChange} step='100' />;
    } else {
        const cals = calcCals(props.food);
        const style = {color: props.calorieGoal > cals || Math.abs(cals - props.calorieGoal) / props.calorieGoal <= .1 ? 'green' : 'red'};

        calorieElement = <div><span style={style}>{cals}</span> <span className="TotalCalories-caloriesGoal">/ {props.calorieGoal}</span></div>
    }

    return (
        <div className="TotalCalories">
            <div className="TotalCalories-container">
                <div className="TotalCalories-label">
                    Calories
                </div>
                <div className="TotalCalories-calories">
                    {calorieElement}
                </div>
            </div>
        </div>
    );
}

export default TotalCalories;
