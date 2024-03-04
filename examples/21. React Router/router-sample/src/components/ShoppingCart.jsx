import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, removeProduct } from "../store/slices/shoppingCart"; 

export default function ShoppingCart() {

    const productsFromStore = useSelector(state => state.shoppingCart.products);
    const dispatch = useDispatch();

    const removeFromShoppingCart = (id) => {
        dispatch(removeProduct(id));
    }

    return (
        <div id="shopping-cart">
            <strong>{ typeof productsFromStore }</strong>
            <h2>Shopping cart</h2>
            <p>Items in the cart: {productsFromStore?.length}</p>
            <ul>
                {productsFromStore?.map(item => (
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <button onClick={() => {removeFromShoppingCart(item.id)}}>Remove</button>
                    </li>
                ))}
            </ul>

        </div>
    );
}