import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {

    const [parentX, setParentX] = useState(10);

    const decrementParentX = () => {
        setParentX(parentX - 1);
    }

    const incrementParentX = () => {
        setParentX(parentX + 1);
    }

    return (
        <div id="ParentToChildPropsPass">
            <h1>Parent to Child Props Pass</h1>
            <p>Parent X: <strong>{parentX}</strong></p>
            <button onClick={decrementParentX}>-</button>
            <button onClick={incrementParentX}>+</button>
            <Child childX={parentX} />
        </div>
    );
}