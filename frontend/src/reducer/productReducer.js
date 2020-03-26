const initState = {
    products : [],
    product : {},
    productByShop: [],
    status_save: 'pending'
}
const productReducer = (state = initState, action) => {

    switch (action.type) {
        case 'GET_ALL_PRODUCT':
            state.products = action.listProducts
            break;
        case 'GET_PRODUCT_BY_ID':
            state.product = action.product
            break;
        case 'SAVE_PRODUCT_SUCESS':
            state.status_save = 'status_success'
            break;
        case 'REFRESH_ACTION_ADD_PRODUCT':
            state.status_save = 'pending'
            break;
        case 'GET_PRODUCT_BY_SHOP_SUCCESS':
            state.productByShop = action.products
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