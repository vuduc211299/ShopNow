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