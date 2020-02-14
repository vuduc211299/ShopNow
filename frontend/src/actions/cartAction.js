export const cartAddAction = (product, quantity) => {
    const data = {product_id: product._id, quantity}
    const user = JSON.parse(localStorage.getItem('user'))
    const requestOption = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.token
        },
        body: JSON.stringify(data)
    }

    return async (dispatch, getState) => {
        const data = await fetch('http://localhost:3000/user/addToCart', requestOption)
        .then(res => res.json())
        if(data){
            localStorage.setItem('cart', JSON.stringify(data.carts))
            let cart = []
            if(localStorage.getItem('cart')) cart = JSON.parse(localStorage.getItem('cart'));
            dispatch({type: 'ADD_TO_CART', cart})
        }else {
            dispatch({type: 'ADD_TO_CART_FAILED'})
        }

    }
}

export const removeAllFromCart = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const requestOption = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.token
        }
    }

    return async (dispatch, getState) => {
        const data = await fetch('http://localhost:3000/user/removeAllCart', requestOption)
        .then(res => res.json())
        if(data){
            localStorage.setItem('cart', JSON.stringify(data.carts))
            let cart = []
            if(localStorage.getItem('cart')) cart = JSON.parse(localStorage.getItem('cart'));
            dispatch({type: 'REMOVE_ALL', cart})
        }else {
            dispatch({type: 'REMOVE_ALL_FAILED'})
        }

    }
}


export const cartRemoveAction = (product) => {
    const data = {product_id: product.product_id._id}
    const user = JSON.parse(localStorage.getItem('user'))
    const requestOption = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.token
        },
        body: JSON.stringify(data)
    }

    return async (dispatch, getState) => {
        const data = await fetch('http://localhost:3000/user/removeFromCart', requestOption)
        .then(res => res.json())
        if(data){
            localStorage.setItem('cart', JSON.stringify(data.carts))
            let cart = []
            if(localStorage.getItem('cart')) cart = JSON.parse(localStorage.getItem('cart'));
            dispatch({type: 'REMOVE_FROM_CART', cart})
        }else {
            dispatch({type: 'REMOVE_FROM_CART_FAILED'})
        }

    }
}

export const changeQuantity = (product_id, quantity) => {
    const data = {product_id, quantity}
    const user = JSON.parse(localStorage.getItem('user'))
    const requestOption = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.token
        },
        body: JSON.stringify(data)
    }

    return async (dispatch, getState) => {
        const data = await fetch('http://localhost:3000/user/changeQuantityInCart', requestOption)
        .then(res => res.json())
        if(data){
            localStorage.setItem('cart', JSON.stringify(data.carts))
            let cart = []
            if(localStorage.getItem('cart')) cart = JSON.parse(localStorage.getItem('cart'));
            dispatch({type: 'CHANGE_QUANTITY', cart})
        }else {
            dispatch({type: 'CHANGE_QUANTITY_FAILED'})
        }

    }
}