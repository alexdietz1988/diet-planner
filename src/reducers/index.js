import { combineReducers } from 'redux'
import mealsReducer from './mealsReducer'
import basicsReducer from './basicsReducer'
import authReducer from './authReducer'

export default combineReducers({
    auth: authReducer,
    basics: basicsReducer,
    meals: mealsReducer
})