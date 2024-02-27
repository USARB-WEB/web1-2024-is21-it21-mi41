import React from "react";
import NavBar from "./NavBar";

export default function Footer() {
    return (
        <footer>
            <div className="footer-nav">
                <NavBar/>
            </div>
            <p>© 2021</p>
        </footer>
    );
}