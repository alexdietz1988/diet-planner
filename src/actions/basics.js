import { FETCH_BASICS, EDIT_BASICS } from './types'
import { diet } from '../apis/backend'

export const fetchBasics = () => async (dispatch, getState) => {
    const user = getState().auth.user
    const response = await diet.get(`basics/?user=${user}`)
    let payload = { success: false, data: {}}
    if (response.data.success) {
        payload.success = true
        payload.data = { weight: response.data.basics.weight, TDEE: response.data.basics.TDEE, goal: response.data.basics.goal }
    }
    dispatch({ type: FETCH_BASICS, payload})
}

export const editBasics = formData => async (dispatch, getState) => {
    const user = getState().auth.user
    const response = await diet.put(`basics/?user=${user}`, { user, ...formData })
    console.log(response)
    let payload = { success: false, data: {}}
    if (response.data.success) {
        payload.success = true
        payload.data = formData
    }
    dispatch({ type: EDIT_BASICS, payload})
}