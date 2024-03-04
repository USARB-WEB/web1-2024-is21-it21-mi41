import React, { useEffect, useState } from "react";

export default function ComponentSuperEffect() {

    const [inputValue, setInputValue] = useState(0)
    const [isOddValue, setIsOddValue] = useState(false);
    
    useEffect(() => {
        console.log('Component Super Effect rerendered');
    })

    useEffect(() => {
        setInputValue(7);
        setIsOddValue(7 % 2 !== 0);
    }, [])

    useEffect(() => {
        console.log('Value changed', inputValue);
        setIsOddValue(inputValue % 2 !== 0);
    }, [inputValue])



    return (
        <div>
            <h2>Component Super Effect</h2>
            <input 
                type="number" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            
            <p>{isOddValue ? 'Odd' : 'Even'}</p>

        </div>
    );
}
