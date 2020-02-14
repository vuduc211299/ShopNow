let user = {}

if(localStorage.getItem('user')) user = JSON.parse(localStorage.getItem('user'))

const initState = {
    updateStatus: 'pending',
    userInfoUpdate: user
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_SUCCESS':
            state.updateStatus = 'status_success';
            state.userInfoUpdate.user = action.data
            break;
        case 'UPDATE_FAILED':
            state.updateStatus = 'status_failed';
            break;
        case 'REFRESH_STATUS': 
            state.updateStatus = 'pending'
            break;
        default:
            break;
    }
    return {
        ... state
    }
}

export default userReducer