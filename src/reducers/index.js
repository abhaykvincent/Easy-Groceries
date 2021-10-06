import {combineReducers} from 'redux'
import cartReducer from './cart'
import ProductsReducer from './products'
const allReducers = combineReducers({
    carte : cartReducer,
    productse : ProductsReducer
})


export default allReducers;