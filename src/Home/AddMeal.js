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

    componentWillMount() {
        this.initServingInputHash();
    }

    initServingInputHash() {
        let servingInputHash = {};
        this.props.foodItems.forEach(foodItem => {
            servingInputHash[foodItem.id] = foodItem.servingSize;
        });
        this.setState({servingInputHash});
    }

    clearServingInputKey(foodItem) {
        let servingInputHash = Object.assign({}, this.state.servingInputHash);
        servingInputHash[foodItem.id] = foodItem.servingSize;
        this.setState({servingInputHash});
    }

    getFilteredFoodItems() {
        const regex = new RegExp(this.state.search, 'i');
        return this.state.foodItems.filter(foodItem => foodItem.name.match(regex));
    }

    handleSearchChange(e) {
        this.setState({search: e.target.value});
        const regex = new RegExp(e.target.value, 'i');
        this.state.foodItems.filter(foodItem =>
            !foodItem.name.match(regex)
        ).forEach(foodItem => this.clearServingInputKey(foodItem));
    }

    handleServingSizeChange(e, foodItem) {
        if (e.target.value > 0 && e.target.value < 1000) {
            let servingInputHash = Object.assign({}, this.state.servingInputHash);
            servingInputHash[foodItem.id] = e.target.value;
            this.setState({servingInputHash});
        }
    }

    handleExit() {
        // this.initServingInputHash();
        this.setState({search: ''});
        this.props.onExit();
    }

    addMeal(foodItem) {
        this.props.addMeal(foodItem);
        this.handleExit();
    }

    render() {
        const filteredFoodItems = this.getFilteredFoodItems();
        const foodItemElements = filteredFoodItems.length > 0 ?
            filteredFoodItems.map(foodItem => {
                let updatedFoodItem = Object.assign({}, foodItem);
                updatedFoodItem.servingSize = this.state.servingInputHash[foodItem.id];
                updatedFoodItem.carbs *= this.state.servingInputHash[foodItem.id] / foodItem.servingSize;
                updatedFoodItem.prot *= this.state.servingInputHash[foodItem.id] / foodItem.servingSize;
                updatedFoodItem.fat *= this.state.servingInputHash[foodItem.id] / foodItem.servingSize;

                return (
                    <FoodItem key={foodItem.id} food={updatedFoodItem} forceClose={!this.props.isOpen} onClose={this.clearServingInputKey}>
                        <FoodItemServingInput food={foodItem} value={this.state.servingInputHash[foodItem.id]} onChange={this.handleServingSizeChange} />
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
