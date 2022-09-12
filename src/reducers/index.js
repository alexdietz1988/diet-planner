import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { LOGIN, LOGOUT, SET_BASICS, SELECT_MEAL, FETCH_MEALS } from '../actions/types'

function authReducer(auth = { isSignedIn: false }, action) {
    switch(action.type) {
        case LOGIN:
            if (action.payload.warning) {
                return { isSignedIn: false, warning: action.payload.warning}
            } else return { isSignedIn: true, user: action.payload.user }
        case LOGOUT:
            return { isSignedIn: false }
    }
    return auth
}

function setBasicsReducer(basics = {weight: 0, goal: 'maintain', TDEE: 0}, action) {
    if (action.type === SET_BASICS) return action.payload
    return basics
}

function setDietReducer(diet = {meals: [], calories: 0, protein: 0}, action) {
    if (action.type === FETCH_MEALS ) return action.payload
    return diet
}

function selectMealReducer(selectedMeal = {}, action) {
    if (action.type === SELECT_MEAL) return action.payload
    return selectedMeal
}

export default combineReducers({
    auth: authReducer,
    basics: setBasicsReducer,
    diet: setDietReducer,
    selectedMeal: selectMealReducer,
    form: formReducer
})