import React, { Component } from 'react';
import MacronutrientGraph from './MacronutrientGraph';
import FoodItemButtonRemove from '../Common/FoodItemButtonRemove';
import './FoodItem.css';

class FoodItem extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleConfirmRemove = this.handleConfirmRemove.bind(this);

        this.state = {
            isOpen: false,
            confirmRemove: false
        };
    }

    handleClick() {
        this.setState({
            isOpen: !this.state.isOpen,
            isConfirmRemove: !this.state.isOpen ? false : this.state.isConfirmRemove
        });
    }

    handleConfirmRemove(e) {
        e.stopPropagation();
        this.setState({
            isConfirmRemove: true
        });
    }

    render() {
        const food = this.props.food;

        const foodItemClass = this.state.isOpen ? "FoodItem--open" : "FoodItem";

        const macroGraphFood = this.state.isOpen ? {
            carbsRatio: 40,
            protRatio: 20,
            fatRatio: 35
        } : {};

        const actionBarIcon = <div className={this.state.isConfirmRemove ? "FoodItem-actionBarIcon--confirm" : "FoodItem-actionBarIcon"}>
            <span className={this.state.isConfirmRemove ? "ion-trash-a centered txt-theme" : "ion-gear-b centered"}></span>
        </div>;


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
                    {actionBarIcon}
                    <div className="FoodItem-actionBarButtonContainer">
                        <FoodItemButtonRemove isConfirmRemove={this.state.isConfirmRemove} confirmRemove={this.handleConfirmRemove} />
                    </div>
                </div>
            </div>
        );
    }

}

export default FoodItem;
