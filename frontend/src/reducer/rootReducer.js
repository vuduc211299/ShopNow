import { combineReducers } from 'redux'
import categoryReducer from '../reducer/categoryReducer'
import cartReducer from '../reducer/cartReducer'
import productReducer from '../reducer/productReducer'

const rootReducer = combineReducers({
    categoryReducer,
    cartReducer,
    productReducer
})

export default rootReducer