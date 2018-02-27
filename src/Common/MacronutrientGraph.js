import React from 'react';
import './MacronutrientGraph.css';

function MacronutrientGraph(props) {
    const carbsRatio = props.food.carbsRatio || 0;
    const protRatio = props.food.protRatio || 0;
    const fatRatio = props.food.fatRatio || 0;

    const carbsStyle = {width: carbsRatio + '%'};
    const protStyle = {width: protRatio + '%'};
    const fatStyle = {width: fatRatio + '%'};

    return (
        <div className="MacronutrientGraph">
            <div className="MacronutrientGraph-graph centered">
                <div className="MacronutrientGraph-macroRow">
                    <div className="MacronutrientGraph-macroLabel">
                        <span className="centered">carbs</span>
                    </div>
                    <div className="MacronutrientGraph-barBg">
                        <div className="MacronutrientGraph-barFill bg-carbs" style={carbsStyle}>
                        </div>
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
