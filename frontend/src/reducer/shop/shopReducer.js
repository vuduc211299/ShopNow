const initState = {
    shop: {},
    updateState: 'pending'
}
const shopReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_SHOP_PROFILE_SUCCESS':
            state.shop = action.data
            break;
        case 'FETCH_SHOP_PROFILE_FAILED':
            break;
        case 'UPDATE_SHOP_PROFILE_SUCCESS':
            state.shop = action.data
            state.updateState = 'status_success'
            break;
        case 'REFRESH_STATUS_1':
            state.updateState = 'pending'
            break;
        default:
            break;
    }
    return {
        ...state
    }
}

export default shopReducer