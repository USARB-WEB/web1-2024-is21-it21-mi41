import React, { useEffect } from "react";

export default function ComponentA() {
    useEffect(() => {
        console.log('Component A mounted');
        return () => {
            console.log('Component A unmounted');
        }
    }, []);

    return (
        <div>
            <h2>Component A</h2>
        </div>
    );
}