import { LOGIN, LOGOUT } from './types'
import { diet } from '../apis/backend'

export const login = (page, formData) => async dispatch => {
    const response = await diet.post(`auth/${page}`, formData)
    let payload
    
    if (['invalid username or password', 'user already exists'].includes(response.data)) {
        payload = { "warning": response.data }
    } else if (response.data === 'success') {
        payload = { "user": formData.user }
    } else payload = { "warning": response }

    dispatch({ type: LOGIN, payload})
}

export const logout = () => {
    return { type: LOGOUT }
}