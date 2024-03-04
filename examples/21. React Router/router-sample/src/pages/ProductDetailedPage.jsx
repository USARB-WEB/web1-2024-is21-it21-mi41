import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import ShoppingCart from "../components/ShoppingCart";
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from "../store/slices/shoppingCart";

export default function ProductDetailedPage() {
    const { id } = useParams();

    const [product, setProduct] = useState({});
    const [isInCart, setIsInCart] = useState(false);
    const dispatch = useDispatch();

    const productsFromStore = useSelector(state => state.shoppingCart.products);
    

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data)
                setIsInCart(productsFromStore.some(item => item.id === data.id));
            });
    }, []);
    

    const addToCart = () => {
        dispatch(addProduct(product));
        setIsInCart(true);
    }

    return (
        <>
            <NavBar />
            <div className="page-wrapper">
                <div>
                    <h1>Product detailed page</h1>
                    {
                        isInCart ? <p>Product is in cart</p> : <button onClick={addToCart}>Add to cart</button>
                    }
                    <p>This is a page content</p>
                    <p>Product ID: {id}</p>
                    <p>Product name: {product.title}</p>
                </div>
                <ShoppingCart />
            </div>

            <Footer />
        </>
    );
}