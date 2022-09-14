import { FETCH_BASICS, EDIT_BASICS } from './types'
import { diet } from '../apis/backend'

export const fetchBasics = () => async (dispatch, getState) => {
    const user = getState().auth.user
    const response = await diet.get(`basics/?user=${user}`)
    dispatch({ type: FETCH_BASICS, payload: response.data})
}

export const editBasics = formData => async (dispatch, getState) => {
    const user = getState().auth.user
    await diet.put(`basics/?user=${user}`, { user, ...formData })
    dispatch({ type: EDIT_BASICS, payload: formData})
}