import { combineReducers } from 'redux'
import categoryReducer from '../reducer/categoryReducer'
import cartReducer from '../reducer/cartReducer'
import productReducer from '../reducer/productReducer'
import authReducer from '../reducer/authReducer'

const rootReducer = combineReducers({
    categoryReducer,
    cartReducer,
    productReducer,
    authReducer
})

export default rootReducer