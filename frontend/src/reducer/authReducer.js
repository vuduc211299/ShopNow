import {LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_PENDING} from '../actions/authActions'
let user = {}
if(localStorage.getItem('user')) user = JSON.parse(localStorage.getItem('user'))

const initState = {
    status: LOGIN_PENDING,
    user:  user ? user : {} 
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