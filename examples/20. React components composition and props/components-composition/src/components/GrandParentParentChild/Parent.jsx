import React from "react";
import Child from "./Child";
export default function Parent({parentX}) {

    return (
        <div className="child">
            <h2>Parent</h2>
            <p>ParentX X: <strong>{parentX}</strong></p>
            <Child childX={parentX} />
        </div>
    );
}