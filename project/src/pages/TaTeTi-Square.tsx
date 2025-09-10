import "./TaTeTi-Square.css"

interface squareProps{
  value: string | undefined
  onSquareClick : any
  index : number
}

export function Square({value, onSquareClick, index} : squareProps) {
    return (
    <button className="square" onClick={onSquareClick} data-testid={`square-${index}`}>
      {value}
    </button>
  );
}