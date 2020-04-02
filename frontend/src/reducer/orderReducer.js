const initState = {
    order_status: 'pending'
}
const orderReducer = (state = initState, action) => {

    switch (action.type) {
        case 'ORDER_SUCCESS':
            state.order_status = 'status_success'
            break;
        case 'ORDER_FAILED':
            state.order_status = 'status_failed'
            break;
        default:
            break;
    }
    return {
        ...state
    }
}

export default orderReducer