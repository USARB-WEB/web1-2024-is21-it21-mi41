import { createSlice } from '@reduxjs/toolkit'

export const shoppingCartSlice = createSlice({
    name: 'products',
    initialState: {
        products: [
            {
                id: 1,
                name: "Product 1"
            },
            {
                id: 2,
                name: "Product 2"
            }
        ]
    },
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        removeProduct: (state, action) => {
            return state.filter(product => product.id !== action.payload);
        }
    }
});

export const { addProduct, removeProduct } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;