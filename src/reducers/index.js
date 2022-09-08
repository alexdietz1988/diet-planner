import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

function setUserReducer(user = null, action) {
    if (action.type === 'SET_USER') return action.payload
    return user
}

function setBasicsReducer(basics = {weight: 0, goal: 'maintain', TDEE: 0}, action) {
    if (action.type === 'SET_BASICS') return action.payload
    return basics
}

function setDietReducer(diet = {meals: [], calories: 0, protein: 0}, action) {
    if (action.type === 'SET_DIET') return action.payload
    return diet
}

function selectMealReducer(selectedMeal = {}, action) {
    if (action.type === 'SELECT_MEAL') return action.payload
    return selectedMeal
}

export default combineReducers({
    user: setUserReducer,
    basics: setBasicsReducer,
    diet: setDietReducer,
    selectedMeal: selectMealReducer,
    form: formReducer
})