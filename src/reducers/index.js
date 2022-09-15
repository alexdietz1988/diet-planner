import _ from 'lodash'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { 
    LOGIN, LOGOUT,
    FETCH_BASICS, EDIT_BASICS, 
    CREATE_MEAL, EDIT_MEAL, DELETE_MEAL, FETCH_MEALS
    } from '../actions/types'

function authReducer(auth = { isSignedIn: false, user: '', error: '' }, action) {
    switch(action.type) {
        case LOGIN:
            if (action.payload.error) {
                return { ...auth, error: action.payload.error}
            } else return { ...auth, isSignedIn: true, user: action.payload.user }
        case LOGOUT:
            return { isSignedIn: false, user: '', error: '' }
    }
    return auth
}

function basicsReducer(basics = { error: '', data: { weight: 0, goal: 'maintain', TDEE: 0 }}, action) {
    switch (action.type) {
        case FETCH_BASICS:
            if (action.payload.success) {
                return { ...basics, data: action.payload.data }
            } else {
                return {...basics, error: action.payload.error}
            }
        case EDIT_BASICS:
            if (action.payload.success) {
                return { ...basics, data: action.payload.data }
            } else {
                return { ...basics, error: action.payload.error }
            }
    }
    return basics
}

function mealsReducer(meals = {}, action) {
    switch (action.type) {
        case FETCH_MEALS:
            return { ...action.payload }
        case CREATE_MEAL:
            return { ...meals, [action.payload.id]: action.payload }
        case EDIT_MEAL:
            return { ...meals, [action.payload.id]: action.payload } 
        case DELETE_MEAL:
            return _.omit(meals, action.payload)
    }
    return meals
}

export default combineReducers({
    auth: authReducer,
    basics: basicsReducer,
    meals: mealsReducer,
    form: formReducer
})