import history from "../components/common/history";

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_PENDING = 'LOGIN_PENDING';

export const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    }
    else {
        return {};
    }
}

export const LoginAction = (email, password) => {
    const data = {email, password}
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    };

    return async (dispatch, getState) => {
        let data = await fetch('http://localhost:3000/login', requestOptions)
        .then(res => {
            return res.json()
        })
        .catch(err => {
            console.error('err', err)
        })
        if(data) {
            localStorage.setItem('user', JSON.stringify(data))
            dispatch({type: LOGIN_SUCCESS, data})
            window.location.reload()
        } else {
            dispatch({type: LOGIN_FAILED})
        }
    }
}