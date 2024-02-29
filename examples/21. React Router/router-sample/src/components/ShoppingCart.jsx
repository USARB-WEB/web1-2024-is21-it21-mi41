import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, removeProduct } from "../store/slices/shoppingCart"; 

export default function ShoppingCart() {

    const productsFromStore = useSelector(state => state.shoppingCart.products);


    const [itemsInCart, setItemsInCart] = React.useState(productsFromStore);

    const removeFromShoppingCart = (id) => {
        setItemsInCart(itemsInCart.filter(item => item.id !== id));
    }

    return (
        <div id="shopping-cart">
            <h2>Shopping cart</h2>
            <p>Items in the cart: 0</p>
            <ul>
                {itemsInCart.map(item => (
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <button onClick={() => {removeFromShoppingCart(item.id)}}>Remove</button>
                    </li>
                ))}
            </ul>

        </div>
    );
}