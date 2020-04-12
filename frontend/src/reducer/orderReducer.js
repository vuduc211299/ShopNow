const initState = {
    order_status: 'pending',
    fetch_order_status: 'pending',
    delete_status: 'pending',
    order: []
}
const orderReducer = (state = initState, action) => {

    switch (action.type) {
        case 'ORDER_SUCCESS':
            state.order_status = 'status_success'
            break;
        case 'FETCH_ORDER_SUCCESS':
            state.order = action.order
            state.fetch_order_status = 'status_success'
            break;
        case 'DELETE_ORDER_SUCCESS':
            state.delete_status = 'status_success'
            break;
        case 'REFRESH_ORDER_STATUS':
            state.delete_status = 'pending'
            break;
        case 'ORDER_FAILED':
            state.order_status = 'status_failed'
            break;
        case 'FETCH_ORDER_FAILED':
            state.fetch_order_status = 'status_failed'
            break;
        default:
            break;
    }
    return {
        ...state
    }
}

export default orderReducer