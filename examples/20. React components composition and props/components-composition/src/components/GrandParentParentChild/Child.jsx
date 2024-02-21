import React from "react";
export default function Child({childX}) {

    return (
        <div className="child">
            <h2>Child</h2>
            <p>Child X: <strong>{childX}</strong></p>
        </div>
    );
}