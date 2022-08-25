import { combineReducers } from 'redux'

function setUserReducer(user = null, action) {
    if (action.type === 'SET_USER') return action.payload
    return user
}

export default combineReducers({
    user: setUserReducer
})