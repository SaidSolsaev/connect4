import React, {useEffect, useState} from 'react'

let interval = null;

export default function PlayerTurn({turn, outOfTime, pause, resetFlag}) {
    const [seconds, setSeconds] = useState(60);

    function startTimer(){
        interval = setInterval(() => {
            setSeconds((seconds) => seconds === 0 ? endGame() : seconds - 1)
        }, 1000)
    }

    function stopTimer(){
        clearInterval(interval);
        setSeconds(60);
    }

    function endGame(){
        stopTimer();
        outOfTime();
    }

    useEffect(() => {
        stopTimer()

        startTimer()

        return () => stopTimer()
    }, [turn, resetFlag])

    useEffect(() => {

        if (pause){
            clearInterval(interval)
        }

        if (!pause){
            startTimer()
        }
    
    })
    
    return (
        <div id="player-indicator"  className={turn === "player1" ? "p1" : "p2"}>
            {turn === "player1" ? <p className='body-text'>PLAYER 1s Tur</p> : <p className='body-text'>Player 2s Tur</p>}
        
            <p className='heading-lg'>{seconds}s</p>
        </div>
    );
}
