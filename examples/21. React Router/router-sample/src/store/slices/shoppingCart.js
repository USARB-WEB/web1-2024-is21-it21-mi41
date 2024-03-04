import { createSlice } from '@reduxjs/toolkit'

export const shoppingCartSlice = createSlice({
    name: 'products',
    initialState: {
        products: []
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
            console.log(state.products);
        },
        removeProduct: (state, action) => {
            return state.products.filter(product => product.id !== action.payload);
        }
    }
});

export const { addProduct, removeProduct } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;