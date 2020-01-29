const initState = {
    cart: []
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            state.cart.push(action.product);
            break;
        default:
            break;
    }
    return state;
}

export default cartReducer