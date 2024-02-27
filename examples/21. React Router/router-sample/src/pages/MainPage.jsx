import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function MainPage() {
    return (
        <>
            <NavBar/>
            <h1>Main page</h1>
            <p>This is a page content</p>
            <Footer/>
        </>
    );
}