import React from 'react';
import './MacronutrientSlider.css';

function MacronutrientSlider(props) {
    const carbs = props.macroGoals.carbs;
    const prot = props.macroGoals.prot;
    const fat = props.macroGoals.fat;

    const carbsStyle = {width: carbs + '%'};
    const protStyle = {width: prot + '%'};
    const fatStyle = {width: fat + '%'};

    return (
        <div className="MacronutrientSlider">
            <div className="MacronutrientSlider-slider centered">
                <div className="MacronutrientSlider-sliderRow">
                    <div className="MacronutrientSlider-sliderLabel">
                        <span className="centered">carbs</span>
                    </div>
                    <div className="MacronutrientSlider-sliderContainer">
                        <div className="MacronutrientSlider-sliderBg">
                            <div className="MacronutrientSlider-sliderFill bg-carbs" style={carbsStyle}></div>
                            <div className="MacronutrientSlider-sliderRatio">
                                {carbs}%
                            </div>
                        </div>
                        <input name="carbs" className="MacronutrientSlider-sliderInput" type="range" min="0" max="100" value={carbs} onChange={props.onChange} />
                    </div>
                </div>
                <div className="MacronutrientSlider-sliderRow">
                    <div className="MacronutrientSlider-sliderLabel">
                        <span className="centered">prot</span>
                    </div>
                    <div className="MacronutrientSlider-sliderContainer">
                        <div className="MacronutrientSlider-sliderBg">
                            <div className="MacronutrientSlider-sliderFill bg-prot" style={protStyle}></div>
                            <div className="MacronutrientSlider-sliderRatio">
                                {prot}%
                            </div>
                        </div>
                        <input name="prot" className="MacronutrientSlider-sliderInput" type="range" min="0" max="100" value={prot} onChange={props.onChange} />
                    </div>
                </div>
                <div className="MacronutrientSlider-sliderRow">
                    <div className="MacronutrientSlider-sliderLabel">
                        <span className="centered">fat</span>
                    </div>
                    <div className="MacronutrientSlider-sliderContainer">
                        <div className="MacronutrientSlider-sliderBg">
                            <div className="MacronutrientSlider-sliderFill bg-fat" style={fatStyle}></div>
                            <div className="MacronutrientSlider-sliderRatio">
                                {fat}%
                            </div>
                        </div>
                        <input name="fat" className="MacronutrientSlider-sliderInput" type="range" min="0" max="100" value={fat} onChange={props.onChange} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MacronutrientSlider;
