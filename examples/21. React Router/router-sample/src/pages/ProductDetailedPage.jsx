import React, {useEffect, useState} from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

export default function ProductDetailedPage() {
    const {id} = useParams();

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
            <NavBar/>
            <h1>Product detailed page</h1>
            <p>This is a page content</p>
            <p>Product ID: {id}</p>
            <p>Product name: {product.title}</p>
            <Footer/>
        </>
    );
}