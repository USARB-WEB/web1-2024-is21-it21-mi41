import { configureStore } from '@reduxjs/toolkit'
import shoppingCartReducer from './slices/shoppingCart'

export default configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer
    }
});