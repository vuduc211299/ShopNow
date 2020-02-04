import {LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_PENDING} from '../actions/authActions'

const initState = {
    status: LOGIN_PENDING,
    user: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            state.status = LOGIN_SUCCESS
            state.user = action.data
        case LOGIN_FAILED:
            state.status = LOGIN_FAILED
        default:
            break;
    }
    return {
        ...state
    }
}

export default authReducer