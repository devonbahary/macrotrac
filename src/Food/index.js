import React from 'react';
import FoodItem from '../Common/FoodItem';
import './Food.css';

function Food(props) {
    let foodItems = [];
    for (var i = 0; i < 10; i++) {
        foodItems.push(<FoodItem />);
    }
    return (
        <div className="Food">
            {/* {foodItems} */}
            <FoodItem />
            <FoodItem />
        </div>
    );
}

export default Food;
