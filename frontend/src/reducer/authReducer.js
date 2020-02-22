import {LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_PENDING, SIGNUP_FAILED, SIGNUP_SUCCESS} from '../actions/authActions'
let user = {}
if(localStorage.getItem('user')) user = JSON.parse(localStorage.getItem('user'))

const initState = {
    status: LOGIN_PENDING,
    statusSignUp: '',
    user
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            state.status = LOGIN_SUCCESS
            state.user = action.data
            break;
        case LOGIN_FAILED:
            state.status = LOGIN_FAILED
            break;
        case SIGNUP_SUCCESS:
            state.statusSignUp = SIGNUP_SUCCESS
            console.log(state.statusSignUp)
            break;
        case SIGNUP_FAILED:
            state.statusSignUp = SIGNUP_FAILED
            console.log(state.statusSignUp)
            break;
        default:
            break;
    }
    return {
        ...state
    }
}

export default authReducer