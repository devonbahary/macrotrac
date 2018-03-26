import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import NavHeader from '../Navigation/NavHeader';
import NavFooter from '../Navigation/NavFooter';
import Landing from '../Landing';
import Home from '../Home';
import Food from '../Food';
import User from '../User';

class Scene extends Component {
    constructor(props) {
        super(props);

        this.addMeal = this.addMeal.bind(this);
        this.removeMeal = this.removeMeal.bind(this);
        this.addFood = this.addFood.bind(this);
        this.removeFood = this.removeFood.bind(this);
        this.handleMacroGoalChange = this.handleMacroGoalChange.bind(this);
        this.handleCalorieGoalChange = this.handleCalorieGoalChange.bind(this);

        this.state = {
            todaysMeals: [

            ],
            todaysMealCount: 0,
            foodItems: null,
            userMacroGoals: {
                carbs: 40,
                prot: 20,
                fat: 40
            },
            userCalorieGoal: 2000
        };
    }

    componentDidMount() {
        axios.get('https://macrotrac-server.herokuapp.com/foods/')
          .then((res) => {
              console.log(JSON.stringify(res.data.foods), undefined, 2);
              this.setState({foodItems: res.data.foods});
          }).catch((err) => console.log(err));
    }

    addMeal(foodItem) {
        let foodItemWithTodayIndex = Object.assign({}, foodItem);
        const todaysMealCount = this.state.todaysMealCount + 1;
        foodItemWithTodayIndex._id = todaysMealCount;
        const todaysMeals = this.state.todaysMeals.concat(foodItemWithTodayIndex);
        this.setState({
            todaysMeals,
            todaysMealCount
        });
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
        axios.post('https://macrotrac-server.herokuapp.com/foods/', foodItem)
          .then((res) => {
              axios.get('https://macrotrac-server.herokuapp.com/foods/')
                .then((res) => {
                    this.setState({foodItems: res.data.foods});
                });
          }).catch((err) => console.log(err));
    }

    removeFood(food) {
        axios.delete(`https://macrotrac-server.herokuapp.com/foods/${food._id}`)
          .then((res) => {
              axios.get('https://macrotrac-server.herokuapp.com/foods/')
                .then((res) => {
                    this.setState({foodItems: res.data.foods});
                });
          }).catch((err) => console.log(err));
    }

    handleMacroGoalChange(e) {
        const newVal = Number(e.target.value);
        let dif, carbs, prot, fat;
        switch (e.target.name) {
            case 'carbs':
                dif = this.state.userMacroGoals.carbs - newVal;
                prot = this.state.userMacroGoals.prot;
                fat = this.state.userMacroGoals.fat;
                prot = Math.min(100, Math.max(0, prot + dif));
                if (Math.abs(this.state.userMacroGoals.prot - prot) < Math.abs(dif)) {
                    fat = Math.min(100, Math.max(0, fat + (dif - Math.abs(this.state.userMacroGoals.prot - prot))));
                }
                this.setState({userMacroGoals: {carbs: newVal, prot, fat}});
                break;
            case 'prot':
                dif = this.state.userMacroGoals.prot - newVal;
                fat = this.state.userMacroGoals.fat;
                carbs = this.state.userMacroGoals.carbs;
                fat = Math.min(100, Math.max(0, fat + dif));
                if (Math.abs(this.state.userMacroGoals.fat - fat) < Math.abs(dif)) {
                    carbs = Math.min(100, Math.max(0, carbs + (dif - Math.abs(this.state.userMacroGoals.fat - fat))));
                }
                this.setState({userMacroGoals: {carbs, prot: newVal, fat}});
                break;
            case 'fat':
                dif = this.state.userMacroGoals.fat - newVal;
                carbs = this.state.userMacroGoals.carbs;
                prot = this.state.userMacroGoals.prot;
                carbs = Math.min(100, Math.max(0, carbs + dif));
                if (Math.abs(this.state.userMacroGoals.carbs - carbs) < Math.abs(dif)) {
                    prot = Math.min(100, Math.max(0, prot + (dif - Math.abs(this.state.userMacroGoals.carbs - carbs))));
                }
                this.setState({userMacroGoals: {carbs, prot, fat: newVal}});
                break;
            default:
                break;
        }

    }

    handleCalorieGoalChange(val) {
        if (!val) {
            this.setState({userCalorieGoal: 100});
        } else if (val > 0 && val < 10000) {
            this.setState({userCalorieGoal: val});
        }
    }


    render() {
        return (
            <div className="Scene">
                <NavHeader />
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/home" render={(...routeProps) =>
                        <Home macroGoals={this.state.userMacroGoals} calorieGoal={this.state.userCalorieGoal}
                          todaysMeals={this.state.todaysMeals} foodItems={this.state.foodItems}
                          addMeal={this.addMeal} removeMeal={this.removeMeal} />
                    }/>
                    <Route exact path="/food" render={(...routeProps) =>
                        <Food foodItems={this.state.foodItems} addFood={this.addFood} removeFood={this.removeFood} />
                    } />
                    <Route exact path="/user" render={(...routeProps) =>
                        <User macroGoals={this.state.userMacroGoals} onMacroGoalChange={this.handleMacroGoalChange}
                          calorieGoal={this.state.userCalorieGoal} onCalorieGoalChange={this.handleCalorieGoalChange} />
                    } />
                </Switch>
                <NavFooter />
            </div>
        );
    }
}

export default Scene;
