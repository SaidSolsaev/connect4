import React from 'react'

export default function QuitBtn({quit}) {
    
    
    return (
        <>
            <button onClick={quit} className="btn btn-m heading-m quit">
                Avslutt Spill
            </button>
        </>
    );
}
