import { LOGIN, LOGOUT } from '../actions/types'

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

export default authReducer