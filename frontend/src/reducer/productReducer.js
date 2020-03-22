
const initState = {
    products : [],
    product : {}
}
const productReducer = (state = initState, action) => {

    switch (action.type) {
        case 'GET_ALL_PRODUCT':
            state.products = action.listProducts
            break;
        case 'GET_PRODUCT_BY_ID':
            state.product = action.product
            break;
        case 'GET_ALL_PRODUCT_FAILED': 
            break;
        default:
            break;
    }
    return {
        ...state
    }
}

export default productReducer