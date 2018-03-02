import React from 'react';
import { calcCarbRatio, calcProtRatio, calcFatRatio } from '../utils';
import './MacronutrientGraph.css';

function MacronutrientGraph(props) {
    const carbsRatio = calcCarbRatio(props.food);
    const protRatio = calcProtRatio(props.food);
    const fatRatio = calcFatRatio(props.food);

    const carbsStyle = {width: carbsRatio + '%'};
    const protStyle = {width: protRatio + '%'};
    const fatStyle = {width: fatRatio + '%'};

    const carbsGoalStyle = props.macroGoals ? {width: props.macroGoals.carbs + '%', opacity: '0.4'} : {display: 'none'};
    const protGoalStyle = props.macroGoals ? {width: props.macroGoals.prot + '%', opacity: '0.4'} : {display: 'none'};
    const fatGoalStyle = props.macroGoals ? {width: props.macroGoals.fat + '%', opacity: '0.4'} : {display: 'none'};

    return (
        <div className="MacronutrientGraph">
            <div className="MacronutrientGraph-graph centered">
                <div className="MacronutrientGraph-macroRow">
                    <div className="MacronutrientGraph-macroLabel">
                        <span className="centered">carbs</span>
                    </div>
                    <div className="MacronutrientGraph-barBg">
                        <div className="MacronutrientGraph-barFill bg-carbs" style={carbsStyle}></div>
                        <div className="MacronutrientGraph-barFill--goal bg-carbs" style={carbsGoalStyle}></div>
                        <div className="MacronutrientGraph-barRatio">
                            {carbsRatio}%
                        </div>
                    </div>
                </div>
                <div className="MacronutrientGraph-macroRow">
                    <div className="MacronutrientGraph-macroLabel">
                        <span className="centered">prot</span>
                      </div>
                    <div className="MacronutrientGraph-barBg">
                        <div className="MacronutrientGraph-barFill bg-prot" style={protStyle}></div>
                        <div className="MacronutrientGraph-barFill--goal bg-prot" style={protGoalStyle}></div>
                        <div className="MacronutrientGraph-barRatio">
                            {protRatio}%
                        </div>
                    </div>
                </div>
                <div className="MacronutrientGraph-macroRow">
                    <div className="MacronutrientGraph-macroLabel">
                        <span className="centered">fat</span>
                    </div>
                    <div className="MacronutrientGraph-barBg">
                        <div className="MacronutrientGraph-barFill bg-fat" style={fatStyle}></div>
                        <div className="MacronutrientGraph-barFill--goal bg-fat" style={fatGoalStyle}></div>
                        <div className="MacronutrientGraph-barRatio">
                            {fatRatio}%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MacronutrientGraph;
