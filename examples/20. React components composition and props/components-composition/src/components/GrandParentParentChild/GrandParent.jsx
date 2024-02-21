import React, { useState } from "react";
import Parent from "./Parent";

export default function GrandParent() {

    const [grandParentX, setGrandParentX] = useState(10);

    const decrementGrandParentX = () => {
        setGrandParentX(grandParentX - 1);
    }

    const incrementGrandParentX = () => {
        setGrandParentX(grandParentX + 1);
    }

    return (
        <div id="ParentToChildPropsPass">
            <h1>Grand Parent - &gt; Parent - &gt; Child </h1>
            <p>Parent X: <strong>{grandParentX}</strong></p>
            <button onClick={decrementGrandParentX}>-</button>
            <button onClick={incrementGrandParentX}>+</button>
            <Parent parentX={grandParentX} />
        </div>
    );
}