import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductsList from "../components/ProductsList";
import ShoppingCart from "../components/ShoppingCart";

export default function ProductsPage() {
    return (
        <>
            <NavBar/>
            <h1>Products page</h1>
            <div className="page-wrapper">
                <ProductsList/>
                <ShoppingCart/>
            </div>
    
            <Footer/>
        </>
    );
}