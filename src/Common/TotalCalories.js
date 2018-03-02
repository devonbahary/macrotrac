import React from 'react';
import CalorieIncrementer from '../Common/CalorieIncrementer';
import { calcCals } from '../utils';
import './TotalCalories.css';

function TotalCalories(props) {
    let calorieElement;
    if (props.asInput) {
        calorieElement = <CalorieIncrementer value={props.value} onChange={props.onChange} />;
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
