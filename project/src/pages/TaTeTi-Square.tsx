import { useEffect, useState } from "react";
import "./TaTeTi-Square.css"

interface squareProps{
  value: string | null
  onSquareClick : any
}

export function Square({value, onSquareClick} : squareProps) {
    return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}