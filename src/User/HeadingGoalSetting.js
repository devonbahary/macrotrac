import React from 'react';
import './HeadingGoalSetting.css';

function HeadingGoalSetting(props) {
    return (
        <div className="HeadingGoalSetting">
            <div className="HeadingGoalSetting-container">
                <div className="HeadingGoalSetting-icon">
                    <span className="ion-podium centered"></span>
                </div>
                <div className="HeadingGoalSetting-title">
                    Goal Settings
                </div>
            </div>
        </div>
    );
}

export default HeadingGoalSetting;
