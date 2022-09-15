import { FETCH_BASICS, EDIT_BASICS } from './types'
import { diet } from '../apis/backend'

export const fetchBasics = () => async (dispatch, getState) => {
    const user = getState().auth.user
    const response = await diet.get(`basics/?user=${user}`)
    console.log(response)
    let payload = { success: false, data: {}}
    if (response.data.success) {
        payload.success = true
        let basics = response.data.basics
        payload.data = { weight: basics.weight, TDEE: basics.TDEE, goal: basics.goal }
    }
    dispatch({ type: FETCH_BASICS, payload})
}

export const editBasics = formData => async (dispatch, getState) => {
    const user = getState().auth.user
    const response = await diet.put(`basics/?user=${user}`, { user, ...formData })
    let payload = { success: false, data: {}}
    if (response.data.success) {
        payload.success = true
        payload.data = formData
    }
    dispatch({ type: EDIT_BASICS, payload})
}