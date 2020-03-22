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
        console.log('product', product)
        if(product){
            dispatch({type: 'GET_PRODUCT_BY_ID', product})
        }else {
            dispatch({type: 'GET_PRODUCT_BY_ID_FAILED'})
        }

    }
} 