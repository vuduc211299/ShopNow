export const productAction = () => {
    const requestOption = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return async (dispatch, getState) => {
        const listProducts = await fetch('http://localhost:3000/product/', requestOption)
        .then(res => res.json())
        if(listProducts){
            dispatch({type: 'GET_ALL_PRODUCT', listProducts})
        }else {
            dispatch({type: 'GET_ALL_PRODUCT_FAILED'})
        }

    }
}

export const productByIdAction = (id) => {
    const requestOption = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return async (dispatch, getState) => {
        const product = await fetch('http://localhost:3000/product/' + id, requestOption)
        .then(res => res.json())
        if(product){
            dispatch({type: 'GET_PRODUCT_BY_ID', product})
        }else {
            dispatch({type: 'GET_PRODUCT_BY_ID_FAILED'})
        }

    }
}

export const saveProductAction = (data) => {
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
        const product = await fetch('http://localhost:3000/product/create', requestOption)
        .then(res => res.json())
        if(product){
            dispatch({type: 'SAVE_PRODUCT_SUCESS'})
        }else {
            dispatch({type: 'SAVE_PRODUCT_FAILED'})
        }

    }
}
export const getProductByShopAction = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const requestOption = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }

    return async (dispatch, getState) => {
        const products = await fetch('http://localhost:3000/shop/product/', requestOption)
        .then(res => res.json())
        if(products){
            dispatch({type: 'GET_PRODUCT_BY_SHOP_SUCCESS', products})
        }else {
            dispatch({type: 'GET_PRODUCT_BY_SHOP_FAILED'})
        }

    }
}

export const deleteProductById = (data) => {
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
        const product = await fetch('http://localhost:3000/product/delete', requestOption)
        .then(res => res.json())
        if(product){
            dispatch({type: 'DELETE_PRODUCT_SUCCESS'})
        }else {
            dispatch({type: 'DELETE_PRODUCT_FAILED'})
        }

    }
}

export const editProductById = (data) => {
    const token = JSON.parse(localStorage.getItem('token'))
    const requestOption = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
    }

    return async (dispatch, getState) => {
        const product = await fetch('http://localhost:3000/product/update', requestOption)
        .then(res => res.json())
        if(product){
            dispatch({type: 'UPDATE_PRODUCT_SUCCESS'})
        }else {
            dispatch({type: 'UPDATE_PRODUCT_FAILED'})
        }

    }
}