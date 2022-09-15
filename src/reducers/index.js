import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import mealsReducer from './mealsReducer'
import basicsReducer from './basicsReducer'
import authReducer from './authReducer'

export default combineReducers({
    auth: authReducer,
    basics: basicsReducer,
    meals: mealsReducer,
    form: formReducer
})