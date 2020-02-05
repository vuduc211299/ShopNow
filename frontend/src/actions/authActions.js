
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_PENDING = 'LOGIN_PENDING';
export const GET_PROFILE = 'GET_PROFILE'

export const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user.token) {
        return { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.token
        };
    }
    else {
        return {};
    }
}

// export const getUserProfile = () => {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader
//     }

//     return async (dispatch, getState) => {
//         console.log('dispatch')
//         let user = await fetch('http://localhost:3000/user/profile', requestOptions)
//         .then(res => {
//             console.log(res.json())
//             return res.json()
//         })
//         .catch(err => {
//             console.error('err', err)
//         })
//         console.log('user',user)
//         if(user){
//             dispatch({type: GET_PROFILE, user})
//         }
//     }
// }

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