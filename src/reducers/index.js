import { combineReducers } from 'redux'

function setUserReducer(user = null, action) {
    if (action.type === 'SET_USER') return action.payload
    return user
}

function setBasicsReducer(basics = {weight: 0, goal: 'maintain', TDEE: 0}, action) {
    if (action.type === 'SET_BASICS') return action.payload
    return basics
}

export default combineReducers({
    user: setUserReducer,
    basics: setBasicsReducer
})