import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductsList from "../components/ProductsList";

export default function ProductsPage() {
    return (
        <>
            <NavBar/>
            <h1>Products page</h1>
            <p>
                <ProductsList/>
            </p>
            <Footer/>
        </>
    );
}