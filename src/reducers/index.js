import { combineReducers } from 'redux'

function setUserReducer(user = null, action) {
    if (action.type === 'SET_USER') return action.payload
    return user
}

function setBasicsReducer(basics = {weight: 0, goal: 'maintain', TDEE: 0}, action) {
    if (action.type === 'SET_BASICS') return action.payload
    return basics
}

function selectMealReducer(selectedMeal = {}, action) {
    if (action.type === 'SELECT_MEAL') return action.payload
    return selectedMeal
}

export default combineReducers({
    user: setUserReducer,
    basics: setBasicsReducer,
    selectedMeal: selectMealReducer
})