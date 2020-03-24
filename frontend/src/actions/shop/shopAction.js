export const shopProfileAction = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const requestOption = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }

    return async (dispatch, getState) => {
        const data = await fetch('http://localhost:3000/shop/profile', requestOption)
        .then(res => res.json())
        if(data){
            dispatch({type: 'FETCH_SHOP_PROFILE_SUCCESS', data})
        }else {
            dispatch({type: 'FETCH_SHOP_PROFILE_FAILED'})
        }

    }
}

export const updateShopProfileAction = (data) => {
    const token = JSON.parse(localStorage.getItem('token'))
    const requestOption = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
    }

    console.log('update', data)
    return async (dispatch, getState) => {
        const data = await fetch('http://localhost:3000/shop/register', requestOption)
        .then(res => res.json())
        if(data){
            dispatch({type: 'UPDATE_SHOP_PROFILE_SUCCESS', data})
        }else {
            dispatch({type: 'UPDATE_SHOP_PROFILE_FAILED'})
        }

    }
}