import { CREATE_MEAL, EDIT_MEAL, DELETE_MEAL, FETCH_MEALS } from '../actions/types'

const mealsDefault = {
    error: '',
    data: {},
    diet: { calories: 0, protein: 0 }
}

function mealsReducer(meals = mealsDefault, action) {
    switch (action.type) {
        case FETCH_MEALS:
            let diet = {
                calories: 0,
                protein: 0
            }
            for (let meal of props.meals) {
                diet.calories += parseInt(meal.calories)
                diet.protein += parseInt(meal.protein)
            }

            if (action.payload.success) {
                return {...meals, data: action.payload.data}
            } else {
                return {...meals, error: 'Error retrieving meals'}
            }
        case CREATE_MEAL:
            return { ...meals, [action.payload.id]: action.payload }
        case EDIT_MEAL:
            return { ...meals, [action.payload.id]: action.payload } 
        case DELETE_MEAL:
            return _.omit(meals, action.payload)
    }
    return meals
}

export default mealsReducer