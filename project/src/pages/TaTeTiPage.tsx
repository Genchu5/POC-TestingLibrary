import "./TaTeTiPage.css"
import TaTeTiContainer from "./TaTeTi-Container"
import { useState } from "react";



export default function TaTeTiPage() {
    
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares: any) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    return (
        <div className="game">
            <div className="game-info">
                <button onClick={()=>{setCurrentMove(0)}}>Reiniciar Juego</button>
            </div>
            <div className="game-grid">
                <TaTeTiContainer xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
        </div>
    );
}