import { postUser } from "../apis/backend"

export function logout() {
    return {
        type: 'LOGOUT',
        payload: ''
    }
}

export const login = () => async dispatch => {
    const response = await postUser
    if (response.data === 'invalid username or password' || response.data === 'user already exists') {
        dispatch({
            type: 'SET_WARNING',
            payload: response.data
        })
    }
    else dispatch({
        type: 'LOGIN',
        payload: response.data
    })
}