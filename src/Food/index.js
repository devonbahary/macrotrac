import React, { Component } from 'react';
import FoodItem from '../Common/FoodItem';
import ButtonAdd from '../Common/ButtonAdd';
import AddFood from './AddFood';
import './Food.css';

class Food extends Component {
    constructor(props) {
        super(props);

        this.handleModalToggle = this.handleModalToggle.bind(this);
        this.addFood = this.addFood.bind(this);
        this.removeFood = this.removeFood.bind(this);

        this.state = {
            isModalOpen: false,
            foodItems: [
                {
                    name: 'Banana',
                    servingSize: '1',
                    servingUnit: 'banana',
                    carbs: 27,
                    prot: 1.3,
                    fat: 0.4
                },
                {
                    name: 'Hamburger',
                    servingSize: '120',
                    servingUnit: 'grams (g)',
                    carbs: 29,
                    prot: 20,
                    fat: 17
                }
            ]
        };
    }

    handleModalToggle() {
        this.setState({isModalOpen: !this.state.isModalOpen});
    }

    addFood(foodItem) {
        if (foodItem.servingUnit === foodItem.name && foodItem.servingSize > 1) {
            foodItem.servingUnit += 's';
        }
        const foodItems = this.state.foodItems.concat(foodItem);
        this.setState({foodItems});
    }

    removeFood(food) {
        const index = this.state.foodItems.indexOf(food);
        if (index > -1) {
            const foodItems = this.state.foodItems.filter((foodItem, i) => i !== index);
            this.setState({foodItems});
        }
    }

    render() {
        return (
            <div className="Food">
                { this.state.foodItems.map((foodItem, index) =>
                    <FoodItem key={index} food={foodItem} removeFood={this.removeFood} />
                )}
                <ButtonAdd onClick={this.handleModalToggle} />
                <AddFood isOpen={this.state.isModalOpen} addFood={this.addFood} onExit={this.handleModalToggle}/>
            </div>
        );

    }
}

export default Food;
