import React from 'react';
import MacronutrientSlider from './MacronutrientSlider';
import TotalCalories from '../Common/TotalCalories';
import HeadingGoalSetting from './HeadingGoalSetting';
import './User.css';

function User(props) {
    return (
        <div className="User">
            <div className="User-portrait">
                <div className="User-portraitContainer centered">
                    <span className="ion-person centered"></span>
                </div>
            </div>
            <HeadingGoalSetting />
            <MacronutrientSlider macroGoals={props.macroGoals} onChange={props.onMacroGoalChange} />
            <TotalCalories asInput={true} value={props.calorieGoal} onChange={props.onCalorieGoalChange} />
        </div>
    );
}

export default User;
