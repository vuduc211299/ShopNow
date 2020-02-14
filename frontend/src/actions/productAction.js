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

