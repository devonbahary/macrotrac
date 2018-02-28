import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavHeader from '../Navigation/NavHeader';
import NavFooter from '../Navigation/NavFooter';
import Home from '../Home';
import Food from '../Food';

class Scene extends Component {
    constructor(props) {
        super(props);

        this.addMeal = this.addMeal.bind(this);
        this.removeMeal = this.removeMeal.bind(this);
        this.addFood = this.addFood.bind(this);
        this.removeFood = this.removeFood.bind(this);

        this.state = {
            todaysMeals: [

            ],
            foodItems: [
                {
                    name: 'Banana',
                    servingSize: '1',
                    servingUnit: 'banana',
                    carbs: 27,
                    prot: 1.3,
                    fat: 0.4,
                    id: 1
                },
                {
                    name: 'Hamburger',
                    servingSize: '120',
                    servingUnit: 'grams (g)',
                    carbs: 29,
                    prot: 20,
                    fat: 17,
                    id: 2
                }
            ]
        };
    }

    addMeal(foodItem) {
        const todaysMeals = this.state.todaysMeals.concat(foodItem);
        this.setState({todaysMeals});
    }

    removeMeal(foodItem) {
        const index = this.state.todaysMeals.indexOf(foodItem);
        if (index > -1) {
            const todaysMeals = this.state.todaysMeals.filter((foodItem, i) => i !== index);
            this.setState({todaysMeals});
        }
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
            <div className="Scene">
                <NavHeader />
                <Switch>
                    <Route exact path="/home" render={(...routeProps) =>
                        <Home todaysMeals={this.state.todaysMeals} foodItems={this.state.foodItems} addMeal={this.addMeal} removeMeal={this.removeMeal} />
                    }/>
                    <Route exact path="/food" render={(...routeProps) =>
                        <Food foodItems={this.state.foodItems} addFood={this.addFood} removeFood={this.removeFood} />
                    } />
                </Switch>
                <NavFooter />
            </div>
        );
    }
}

export default Scene;
