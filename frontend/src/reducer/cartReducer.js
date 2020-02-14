let cart  = [], quantity = 0;
if(localStorage.getItem('cart')) cart = JSON.parse(localStorage.getItem('cart'));

if(cart.length > 0) {
    cart.forEach(item => {
        quantity += item.quantityInCart
    })
}

const initState = {
    cart,
    quantity,
    status: 'pending'
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'REMOVE_ALL':
        case 'REMOVE_FROM_CART':
        case 'CHANGE_QUANTITY':
            state.cart = action.cart
            let quantity = 0
            if(state.cart.length > 0) {
                state.cart.forEach(item => {
                    quantity += item.quantityInCart
                })
            }
            state.quantity = quantity
            break;
        case 'ADD_TO_CART':
            state.cart = action.cart
            let newQuantity = 0
            if(state.cart.length > 0) {
                state.cart.forEach(item => {
                    newQuantity += item.quantityInCart
                })
            }
            state.quantity = newQuantity
            state.status = 'status_success'
            break;
        case 'REFRESH_STATUS':
            state.status = 'pending'
            break;
        default:
            break;
    }
    return {
        ...state
    };
}

export default cartReducer