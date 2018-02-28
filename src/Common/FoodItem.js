import React, { Component } from 'react';
import MacronutrientGraph from './MacronutrientGraph';
import Button from './Button';
import { calcCals } from '../utils';
import './FoodItem.css';

class FoodItem extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            isOpen: false,
            food: props.food
        };
    }

    handleClick() {
        this.setState({
            isOpen: !this.state.isOpen,
            isConfirmRemove: !this.state.isOpen ? false : this.state.isConfirmRemove
        });
        if (this.props.onClose) {
            this.props.onClose(this.state.food);
        }
    }

    componentWillUpdate() {
        if (this.state.isOpen && this.props.forceClose) {
            this.setState({isOpen: false});
        }
    }

    render() {
        const food = this.props.food;
        const foodItemClass = this.state.isOpen ? "FoodItem--open" : "FoodItem";
        const foodItemActions = this.state.isOpen ? this.props.children : null;

        return (
            <div className={foodItemClass}>
                <div className="FoodItem-main" onClick={this.handleClick}>
                    <div className="FoodItem-info">
                        <div className={this.state.isOpen ? "FoodItem-infoName txt-theme" : "FoodItem-infoName" }>
                            {food.name}
                        </div>
                        <div className="FoodItem-infoServings">
                            {food.servingSize} {food.servingUnit}
                        </div>
                    </div>
                    <div className="FoodItem-calories">
                        {calcCals(food)} cals
                    </div>
                </div>
                <div className="FoodItem-graph">
                    <MacronutrientGraph food={this.state.isOpen ? this.props.food : null} />
                </div>
                {foodItemActions}
            </div>
        );
    }

}

export default FoodItem;
