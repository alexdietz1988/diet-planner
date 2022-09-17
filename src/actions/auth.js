import { LOGIN, LOGOUT } from './types'
import { diet } from '../apis/backend'

export const login = (page, formData) => async dispatch => {
    const response = await diet.post(`auth/${page}`, formData)
    let payload = {}
    response.data.success ? payload.user = formData.user : payload.error = response.data.error
    dispatch({ type: LOGIN, payload})
}

export const logout = () => {
    return { type: LOGOUT }
}