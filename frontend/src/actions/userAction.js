import {authHeader} from '../actions/authActions'

export const userAction = (data) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const requestOptions = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.token
        },
        body: JSON.stringify(data)
    };

    return async (dispatch, getState) => {
        let data =  await fetch('http://localhost:3000/user/profile/update', requestOptions)
        .then(res => res.json())
        if(data) {
            console.log('success', data)
            dispatch({type: 'UPDATE_SUCCESS', data})
        }
    }
}
