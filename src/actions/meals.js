import { CREATE_MEAL, EDIT_MEAL, DELETE_MEAL, FETCH_MEALS, FETCH_MEAL } from './types'
import { diet } from '../apis/backend'

export const fetchMeals = () => async (dispatch, getState) => {
    const user = getState().auth.user
    const response = await diet.get(`meal/?user=${user}`)
    let payload = { success: false, data: {}}
    if (response.data.success) {
        payload.success = true
        payload.data = response.data.meals
    }
    dispatch({ type: FETCH_MEALS, payload })
}

export const fetchMeal = mealId => async dispatch => {
    const response = await diet.get(`meal/fetch-meal?id=${mealId}`)
    let payload = { success: false, data: {}}
    if (response.data.success) {
        payload.success = true
        payload.data = response.data.meal
    }
    dispatch({ type: FETCH_MEAL, payload })
}

export const createMeal = formData => async (dispatch, getState) => {
    const user = getState().auth.user
    const response = await diet.post(`meal/?user=${user}`, {user, ...formData})
    let payload = { success: false }
    if (response.data.success) {
        payload.success = true
    }
    dispatch({ type: CREATE_MEAL, payload })
}

export const editMeal = formData => async (dispatch, getState) => {
    const user = getState().auth.user
    const mealId = getState().meals.selectedMeal._id
    const response = await diet.put(`meal/?id=${mealId}`, {user, ...formData})
    let payload = { success: false }
    if (response.data.success) {
        payload.success = true
    }
    dispatch({ type: EDIT_MEAL, payload })
}

export const deleteMeal = mealId => async dispatch => {
    await diet.delete(`meal/?id=${mealId}`)
    dispatch({ type: DELETE_MEAL })
}