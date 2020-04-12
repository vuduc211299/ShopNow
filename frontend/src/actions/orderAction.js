export const createOrderAction = (data) => {
    const token = JSON.parse(localStorage.getItem('token')) 
    const requestOption = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
    }

    return async (dispatch, getState) => {
        const order = await fetch('http://localhost:3000/order/create', requestOption)
        .then(res => res.json())
        if(order){    
            dispatch({type: 'ORDER_SUCCESS', order})
        }else {
            dispatch({type: 'ORDER_FAILED'})
        }

    }
}

export const getAllOrderAction = () => {
    const token = JSON.parse(localStorage.getItem('token')) 
    const requestOption = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }

    return async (dispatch, getState) => {
        const order = await fetch('http://localhost:3000/shop/order', requestOption)
        .then(res => res.json())
        if(order){    
            dispatch({type: 'FETCH_ORDER_SUCCESS', order})
        }else {
            dispatch({type: 'FETCH_ORDER_FAILED'})
        }

    }
}

export const deleteOrderByIdAction = (data) => {
    const token = JSON.parse(localStorage.getItem('token')) 
    const requestOption = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
    }

    return async (dispatch, getState) => {
        const order = await fetch('http://localhost:3000/order/delete', requestOption)
        .then(res => res.json())
        console.log(order)
        if(order){    
            dispatch({type: 'DELETE_ORDER_SUCCESS'})
        }else {
            dispatch({type: 'DELETE_ORDER_FAILED'})
        }

    }
}