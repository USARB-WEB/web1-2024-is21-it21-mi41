import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProductsList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [])
    
    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    <Link to={`/products/${product.id}`}>{product.title}</Link>
                </li>
            ))}
        </ul>
    );
}