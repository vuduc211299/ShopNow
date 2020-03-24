import { combineReducers } from 'redux'
import categoryReducer from '../reducer/categoryReducer'
import cartReducer from '../reducer/cartReducer'
import productReducer from '../reducer/productReducer'
import authReducer from '../reducer/authReducer'
import userReducer from '../reducer/userReducer'
import shopReducer from '../reducer/shop/shopReducer'

const rootReducer = combineReducers({
    cartReducer,
    productReducer,
    authReducer,
    categoryReducer,
    userReducer,
    shopReducer
})

export default rootReducer