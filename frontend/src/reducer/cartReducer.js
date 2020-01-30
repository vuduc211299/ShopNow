const initState = {
    cart: [],
    quantity: 0,
    totalPrice: 0
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_QUANTITY': 
            let i = state.cart.indexOf(action.cartItem);
            state.cart[i].quantityInCart = action.newQuantity;
            break;
        case 'ADD_TO_CART':
            if(!state.cart.includes(action.product)) {
                state.cart.push(action.product);
            }
            let index = state.cart.indexOf(action.product);
            state.cart[index].quantityInCart ++;
            break;
        case 'REMOVE_FROM_CART':
            let y = state.cart.indexOf(action.cartItem)
            state.cart[y].quantityInCart = 0;
            let newCart = state.cart.filter(item => state.cart.indexOf(item) !== y);
            state.cart = newCart;
            break;
        default:
            break;
    }
    let quantity = 0, totalPrice = 0;
    if(state.cart.length > 0){
        state.cart.map(item => {
            quantity+=item.quantityInCart;
            totalPrice+= item.price * item.quantityInCart
        });
    }
    
    return {
        ...state,
        quantity,
        totalPrice
    };
}

export default cartReducer