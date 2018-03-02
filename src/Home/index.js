import React, { Component } from 'react';
import Time from './Time';
import FoodItem from '../Common/FoodItem';
import FoodItemAction from '../Common/FoodItemAction';
import FoodItemNone from '../Common/FoodItemNone';
import MacronutrientGraph from '../Common/MacronutrientGraph';
import ButtonAdd from '../Common/ButtonAdd';
import AddMeal from './AddMeal';
import TotalCalories from '../Common/TotalCalories';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.handleModalToggle = this.handleModalToggle.bind(this);
        this.addMeal = this.addMeal.bind(this);

        this.state = {isModalOpen: false};
    }

    handleModalToggle() {
        this.setState({isModalOpen: !this.state.isModalOpen});
    }

    addMeal(foodItem) {
        this.setState({isModalOpen: false});
        this.props.addMeal(foodItem);
    }

    render() {
        const totalFood = this.props.todaysMeals.reduce((totalFood, foodItem) => {
            return {
                carbs: totalFood.carbs + foodItem.carbs,
                prot: totalFood.prot + foodItem.prot,
                fat: totalFood.fat + foodItem.fat
            };
        }, {carbs: 0, prot: 0, fat: 0});

        const todaysMealElements = this.props.todaysMeals.length > 0 ?
            this.props.todaysMeals.map((foodItem, index) =>
                <FoodItem key={index} food={foodItem}>
                    <FoodItemAction food={foodItem} action={this.props.removeMeal}
                        actionName='Remove' requireConfirm={true}
                        actionIcon="ion-trash-a" confirmIcon="ion-gear-a" />
                </FoodItem>
            ) : <FoodItemNone />;

        return (
            <div className="Home">
                <Time />
                <div className="Home-graph">
                    <MacronutrientGraph food={totalFood} macroGoals={this.props.macroGoals} />
                </div>
                <TotalCalories food={totalFood} calorieGoal={this.props.calorieGoal} />
                {todaysMealElements}
                <ButtonAdd onClick={this.handleModalToggle}/>
                <AddMeal isOpen={this.state.isModalOpen} foodItems={this.props.foodItems} addMeal={this.addMeal} onExit={this.handleModalToggle} />
            </div>
        );
    }
}

export default Home;
