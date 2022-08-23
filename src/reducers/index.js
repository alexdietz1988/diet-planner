import { combineReducers } from 'redux'

function setUserReducer(user = null, action) {
    if (action.type === 'LOGIN' || action.type === 'LOGOUT') {
        return action.payload
    }
    return user
}

function setWarning(warning = null, action) {
    if (action.type === 'SET_WARNING') {
        return action.payload
    }
}

export default combineReducers({
    user: setUserReducer,
    warning: setWarning
})