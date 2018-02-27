import React, { Component } from 'react';
import MacronutrientGraph from './MacronutrientGraph';
import ButtonRemove from '../Common/ButtonRemove';
import './FoodItem.css';

class FoodItem extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {isOpen: false};
    }

    handleClick() {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        const food = this.props.food;

        const foodItemClass = this.state.isOpen ? "FoodItem--open" : "FoodItem";

        const macroGraphFood = this.state.isOpen ? {
            carbsRatio: 40,
            protRatio: 20,
            fatRatio: 35
        } : {};

        return (
            <div className={foodItemClass} onClick={this.handleClick}>
                <div className="FoodItem-main">
                    <div className="FoodItem-info">
                        <div className={this.state.isOpen ? "FoodItem-infoName txt-theme" : "FoodItem-infoName" }>
                            Banana
                        </div>
                        <div className="FoodItem-infoServings">
                            1 banana
                        </div>
                    </div>
                    <div className="FoodItem-calories">
                        710 cals
                    </div>
                </div>
                <div className="FoodItem-graph">
                    <MacronutrientGraph food={macroGraphFood}/>
                </div>
                <div className="FoodItem-actionBar">
                    <div className="FoodItem-actionBarIcon">
                        <span className="ion-gear-b centered txt-theme"></span>
                    </div>
                    <div className="FoodItem-actionBarButtonContainer">
                        <ButtonRemove />
                    </div>
                </div>
            </div>
        );
    }

}

export default FoodItem;
