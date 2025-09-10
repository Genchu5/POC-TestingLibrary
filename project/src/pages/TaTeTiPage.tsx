import "./TaTeTiPage.css"
import TaTeTiContainer from "./TaTeTi-Container"
import { useState } from "react";



export default function TaTeTiPage() {
    
    const [squares, setSquares] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = squares[currentMove];

    function handlePlay(nextSquares: any) {
        const nextSquare = [...squares.slice(0, currentMove + 1), nextSquares];
        setSquares(nextSquare);
        setCurrentMove(nextSquare.length - 1);
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