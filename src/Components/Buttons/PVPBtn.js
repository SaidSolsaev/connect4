import React from 'react'
import pvp from "../../Images/player-vs-player.svg"

export default function PVPBtn() {
    return (
        <>
            <button onClick={() => startGame()} className="btn btn-lg heading-m pvp">
                Spill mot spiller
                <img src={pvp} alt="player vs player" />
            </button>
        </>
    );
}
