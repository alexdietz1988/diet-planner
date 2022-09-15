import _ from 'lodash'
import { CREATE_MEAL, EDIT_MEAL, DELETE_MEAL, FETCH_MEALS, FETCH_MEAL } from '../actions/types'

const mealsDefault = {
    error: '',
    data: [],
    diet: { calories: 0, protein: 0 },
    selectedMeal: { name: '', calories: '0', protein: '0'}
}

function mealsReducer(meals = mealsDefault, action) {
    switch (action.type) {
        case FETCH_MEALS:
            if (!action.payload.success) {
                return {...meals, error: 'Error retrieving meals'}
            } else {
                let diet = {
                    calories: 0,
                    protein: 0
                }
                for (let meal of action.payload.data) {
                    diet.calories += parseInt(meal.calories)
                    diet.protein += parseInt(meal.protein)
                }
                return { ...meals, error: '', data: action.payload.data}
            }
        case FETCH_MEAL:
            if (!action.payload.success) {
                return {...meals, error: 'Error retrieving meals'}
            } else {
                return {...meals, error: '', selectedMeal: action.payload.data}
            }
    }
    return meals
}

export default mealsReducer