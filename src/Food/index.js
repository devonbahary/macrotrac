import React, { Component } from 'react';
import FoodItem from '../Common/FoodItem';
import FoodItemAction from '../Common/FoodItemAction';
import FoodItemNone from '../Common/FoodItemNone';
import ButtonAdd from '../Common/ButtonAdd';
import AddFood from './AddFood';
import './Food.css';

class Food extends Component {
    constructor(props) {
        super(props);

        this.handleModalToggle = this.handleModalToggle.bind(this);

        this.state = {
            isModalOpen: false
        };
    }

    handleModalToggle() {
        this.setState({isModalOpen: !this.state.isModalOpen});
    }

    render() {
        const foodItems = this.props.foodItems.length > 0 ?
            this.props.foodItems.map(foodItem =>
                <FoodItem key={foodItem.id} food={foodItem}>
                    <FoodItemAction food={foodItem} action={this.props.removeFood}
                        actionName='Remove' requireConfirm={true}
                        actionIcon="ion-trash-a" confirmIcon="ion-gear-a" />
                </FoodItem>
            ) : <FoodItemNone />;
        return (
            <div className="Food">
                {foodItems}
                <ButtonAdd onClick={this.handleModalToggle} />
                <AddFood isOpen={this.state.isModalOpen} addFood={this.props.addFood} onExit={this.handleModalToggle}/>
            </div>
        );

    }
}

export default Food;
