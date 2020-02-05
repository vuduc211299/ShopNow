let user = {}

if(localStorage.getItem('user')) user = JSON.parse(localStorage.getItem('user'))

const initState = {
    userInfoUpdate: user
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_SUCCESS': 
            state.userInfoUpdate.user = action.data
        default:
            break;
    }
    return {
        ... state
    }
}

export default userReducer