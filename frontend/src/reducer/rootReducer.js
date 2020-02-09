import { combineReducers } from 'redux'
import categoryReducer from '../reducer/categoryReducer'
import cartReducer from '../reducer/cartReducer'
import productReducer from '../reducer/productReducer'
import authReducer from '../reducer/authReducer'
import userReducer from '../reducer/userReducer'

const rootReducer = combineReducers({
    cartReducer,
    productReducer,
    authReducer,
    categoryReducer,
    userReducer
})

export default rootReducer