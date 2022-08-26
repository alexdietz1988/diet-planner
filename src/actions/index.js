export function setUser(user) {
    return {
        type: 'SET_USER',
        payload: user
    }
}

export function setBasics(weight, goal, TDEE) {
    let [targetCalories, targetProtein] = [TDEE, weight]
    
    if (goal === 'cut') {
        targetCalories *= 0.75
        targetProtein *= 1.1
    
    } else if (goal === 'bulk') targetCalories *= 1.1

    return {
        type: 'SET_BASICS',
        payload: {weight, goal, TDEE, targetCalories, targetProtein}
    }
}

export function setDiet(meals) {
    let [calories, protein] = [0,0]
    for (let meal of meals) {
        calories += parseInt(meal.calories)
        protein += parseInt(meal.protein)
    }

    return {
        type: 'SET_DIET',
        payload: {meals, calories, protein}
    }
}

export function selectMeal(meal) {
    return {
        type: 'SELECT_MEAL',
        payload: meal
    }
}