export const calcCals = (food) => food ? Math.round((food.carbs || 0) * 4 + (food.prot || 0) * 4 + (food.fat || 0) * 9) : 0;

export const calcCarbRatio = (food) => calcCals(food) ? Math.round((food.carbs || 0) * 4 / calcCals(food) * 100) : 0;

export const calcProtRatio = (food) => calcCals(food) ? Math.round((food.prot || 0) * 4 / calcCals(food) * 100) : 0;

export const calcFatRatio = (food) => calcCals(food) ? Math.round((food.fat || 0) * 9 / calcCals(food) * 100) : 0;
