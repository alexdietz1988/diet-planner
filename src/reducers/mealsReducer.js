import _ from 'lodash'
import { CREATE_MEAL, EDIT_MEAL, DELETE_MEAL, FETCH_MEALS } from '../actions/types'

const mealsDefault = {
    error: '',
    data: {},
    diet: { calories: 0, protein: 0 }
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
                for (let meal in action.payload.data) {
                    diet.calories += parseInt(meal.calories)
                    diet.protein += parseInt(meal.protein)
                }
                return { error: '', data: action.payload.data, diet}
            }
    }
    return meals
}

export default mealsReducer