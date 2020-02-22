
export const userAction = (data) => {
    const token = JSON.parse(localStorage.getItem('token'))
    const requestOptions = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
    };

    return async (dispatch, getState) => {
        const data =  await fetch('http://localhost:3000/user/profile/update', requestOptions)
        .then(res => res.json())
        if(!data.errmsg) {
            localStorage.setItem('user', JSON.stringify(data))
            dispatch({type: 'UPDATE_SUCCESS', data})
        } else {
            dispatch({type: 'UPDATE_FAILED'})
        }
    }
}
