import { FETCH_MEALS, FETCH_MEAL, EDIT_MEAL, CREATE_MEAL, DELETE_MEAL } from '../actions/types'

const mealsDefault = {
    data: [],
    diet: { calories: 0, protein: 0 },
    selectedMeal: { name: '', calories: '0', protein: '0', _id: '' },
    fetchCount: 0
}

function mealsReducer(meals = mealsDefault, action) {
    function incrementFetchCount() {
        if (!action.payload.success) {
            return meals
        } else {
            return {
                ...meals,
                fetchCount: meals.fetchCount + 1
            }
        }
    }

    switch (action.type) {
        case FETCH_MEALS:
            if (!action.payload.success) {
                return meals
            } else {
                let diet = { calories: 0, protein: 0 }
                for (let meal of action.payload.data) {
                    diet.calories += parseInt(meal.calories)
                    diet.protein += parseInt(meal.protein)
                }
                return {
                    ...meals,
                    data: action.payload.data,
                    diet,
                    fetchCount: meals.fetchCount + 1
                }
            }
        case FETCH_MEAL:
            if (!action.payload.success) {
                return meals
            } else {
                return {
                    ...meals,
                    selectedMeal: action.payload.data,
                    fetchCount: meals.fetchCount + 1
                }
            }
        case EDIT_MEAL:
            return incrementFetchCount()
        case CREATE_MEAL:
            return incrementFetchCount()
        case DELETE_MEAL:
            return incrementFetchCount()
    }
    return meals
}

export default mealsReducer