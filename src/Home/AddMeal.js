import React, { Component } from 'react';
import Modal from '../Common/Modal';
import FoodItem from '../Common/FoodItem';
import FoodItemAction from '../Common/FoodItemAction';
import FoodItemNone from '../Common/FoodItemNone';
import FoodItemServingInput from './FoodItemServingInput';
import './AddMeal.css';

class AddMeal extends Component {
    constructor(props) {
        super(props);

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleServingSizeChange = this.handleServingSizeChange.bind(this);
        this.handleExit = this.handleExit.bind(this);
        this.clearServingInputKey = this.clearServingInputKey.bind(this);
        this.addMeal = this.addMeal.bind(this);

        this.state = {
            search: '',
            foodItems: this.props.foodItems,
            servingInputHash: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        this.initServingInputHash();
    }

    initServingInputHash() {
        let servingInputHash = {};
        if (this.props.foodItems) {
            this.props.foodItems.forEach(foodItem => {
                servingInputHash[foodItem._id] = foodItem.servingSize;
            });
            this.setState({servingInputHash});
        }
    }

    clearServingInputKey(foodItem) {
        let servingInputHash = Object.assign({}, this.state.servingInputHash);
        servingInputHash[foodItem._id] = foodItem.servingSize || servingInputHash[foodItem._id];
        this.setState({servingInputHash});
    }

    handleSearchChange(e) {
        this.setState({search: e.target.value});
        const regex = new RegExp(e.target.value, 'i');
        if (this.state.foodItems) {
            this.state.foodItems.filter(foodItem =>
                !foodItem.name.match(regex)
            ).forEach(foodItem => this.clearServingInputKey(foodItem));
        }
    }

    handleServingSizeChange(e, foodItem) {
        if (e.target.value > 0 && e.target.value < 1000) {
            let servingInputHash = Object.assign({}, this.state.servingInputHash);
            servingInputHash[foodItem._id] = e.target.value;
            this.setState({servingInputHash});
        }
    }

    handleExit() {
        this.setState({search: ''});
        this.props.onExit();
    }

    addMeal(foodItem) {
        this.props.addMeal(foodItem);
        this.handleExit();
    }

    render() {
        const regex = new RegExp(this.state.search, 'i');
        const foodItemElements = this.props.foodItems ?
            this.props.foodItems.filter((foodItem) => {
                return foodItem.name.match(regex);
            }).map(foodItem => {
                const servingInput = this.state.servingInputHash[foodItem._id];
                let updatedFoodItem = Object.assign({}, foodItem);
                updatedFoodItem.servingSize = servingInput;
                updatedFoodItem.carbs *= servingInput / foodItem.servingSize;
                updatedFoodItem.prot *= servingInput / foodItem.servingSize;
                updatedFoodItem.fat *= servingInput / foodItem.servingSize;

                return (
                    <FoodItem key={foodItem._id} food={updatedFoodItem} forceClose={!this.props.isOpen} onClose={this.clearServingInputKey}>
                        <FoodItemServingInput food={foodItem} value={servingInput} onChange={this.handleServingSizeChange} />
                        <FoodItemAction food={updatedFoodItem} action={this.addMeal}
                          actionName='Add Meal'
                          actionIcon="ion-fork" confirmIcon="ion-gear-a"
                        />
                    </FoodItem>
                );
            }) : <FoodItemNone />;

        return (
            <div className="AddMeal">
                <Modal heading="Add Meal" isOpen={this.props.isOpen} onExit={this.handleExit}>
                    <div className="AddMeal-searchBox">
                        <input name="search" type="text" placeholder="Search for food" value={this.state.search} onChange={this.handleSearchChange} />
                    </div>
                    {foodItemElements}
                </Modal>
            </div>
        );
    }
}

export default AddMeal;
