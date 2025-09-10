import "./TaTeTi-Container.css"
import {Square} from "./TaTeTi-Square"


type PlayFunction = (nextSquares: (string | undefined)[]) => void;
interface gridProps{
  xIsNext : boolean 
  squares: (string | undefined)[];
  onPlay : PlayFunction
}

export function calculateWinner(squares:React.ReactNode[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function TaTeTiContainer({ xIsNext, squares, onPlay }: gridProps) {
  
  function handleClick(i:number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  let statusStyle;
  if (winner) {
    status = 'El jugador ' + winner + ' ha ganado!';
    statusStyle = "winner"
  } else {
    status = 'Siguiente jugador: ' + (xIsNext ? 'X' : 'O');
    statusStyle = "nextPlayer"
  }

  return (
    <div className="container">
      <div data-testid="status" className={statusStyle}>{status}</div>
      <div className="grid">
        {squares.map((value:string|undefined, index:number) => (
          <Square
            key={index}
            index = {index}
            value={value}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

