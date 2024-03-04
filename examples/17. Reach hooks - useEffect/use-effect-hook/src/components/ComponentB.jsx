import React, {useEffect} from "react";

export default function ComponentB() {

    useEffect(() => {
        console.log('Component B mounted');
        return () => {
            console.log('Component B unmounted');
        }
    }, []);

    return (
        <div>
            <h2>Component B</h2>
        </div>
    );
}