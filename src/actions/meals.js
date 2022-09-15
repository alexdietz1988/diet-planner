import { CREATE_MEAL, EDIT_MEAL, DELETE_MEAL, FETCH_MEALS } from './types'
import { diet } from '../apis/backend'

export const createMeal = formData => async (dispatch, getState) => {
    const user = getState().auth.user
    await diet.post(`meal/?user=${user}`, {user, ...formData})
    dispatch({ type: CREATE_MEAL, payload: formData })
}

export const editMeal = formData => async (dispatch, getState) => {
    const user = getState().auth.user
    const mealId = getState().selectedMeal.id
    await diet.put(`meal/?id=${mealId}`, {user, ...formData})
    dispatch({ type: EDIT_MEAL, payload: formData})
}

export const deleteMeal = () => async (dispatch, getState) => {
    const mealId = getState().selectedMeal.id
    await diet.delete(`meal/?id=${mealId}`)
    dispatch({ type: DELETE_MEAL })
}

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