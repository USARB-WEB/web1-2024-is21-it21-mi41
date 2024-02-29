import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import ShoppingCart from "../components/ShoppingCart";

export default function ProductDetailedPage() {
    const { id } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data)
            });
    }, [])


    return (
        <>
            <NavBar />
            <div className="page-wrapper">
                <div>
                    <h1>Product detailed page</h1>
                    <button>add to cart</button>
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