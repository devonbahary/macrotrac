import React, { Component } from 'react';
import MacronutrientGraph from './MacronutrientGraph';
import Button from '../Common/Button';
import { calcCals } from '../utils';
import './FoodItem.css';

class FoodItem extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleConfirmRemove = this.handleConfirmRemove.bind(this);

        this.state = {
            isOpen: false,
            confirmRemove: false,
            food: props.food
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
        if (!this.state.isConfirmRemove) {
            this.setState({
              isConfirmRemove: true
            });
        } else {
            this.handleClick();
            this.props.removeFood(this.state.food);
        }

    }

    render() {
        const food = this.props.food;

        const foodItemClass = this.state.isOpen ? "FoodItem--open" : "FoodItem";

        const actionBarIcon = <div className={this.state.isConfirmRemove ? "FoodItem-actionBarIcon--confirm" : "FoodItem-actionBarIcon"}>
            <span className={this.state.isConfirmRemove ? "ion-trash-a centered txt-theme" : "ion-gear-b centered"}></span>
        </div>;


        return (
            <div className={foodItemClass} onClick={this.handleClick}>
                <div className="FoodItem-main">
                    <div className="FoodItem-info">
                        <div className={this.state.isOpen ? "FoodItem-infoName txt-theme" : "FoodItem-infoName" }>
                            {this.props.food.name}
                        </div>
                        <div className="FoodItem-infoServings">
                            {this.props.food.servingSize} {this.props.food.servingUnit}
                        </div>
                    </div>
                    <div className="FoodItem-calories">
                        {calcCals(this.props.food)} cals
                    </div>
                </div>
                <div className="FoodItem-graph">
                    <MacronutrientGraph food={this.props.food}/>
                </div>
                <div className="FoodItem-actionBar">
                    {actionBarIcon}
                    <div className="FoodItem-actionBarButtonContainer">
                        <Button isActive={this.state.isConfirmRemove} onClick={this.handleConfirmRemove} value={this.state.isConfirmRemove ? "Confirm" : "Remove"}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default FoodItem;
