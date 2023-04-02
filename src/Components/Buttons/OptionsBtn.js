import React from 'react'

export default function OptionsBtn({options, operation, current, size}) {
    
    function handleClick(){
        if (options === "RESTART"){
            return operation()
        }
        operation(!current)
    }
    
    return (
        <>
            <button onClick={handleClick} className={`btn ${size} heading-m options ${options}`}>{options}</button>
        </>
    );
}
