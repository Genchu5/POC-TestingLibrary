import { render, fireEvent } from "@testing-library/react";
import TaTeTiPage from "../TaTeTiPage"
import TaTeTiContainer from "../TaTeTi-Container";

const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

function generateWinningBoard(player: string, line: number[]): (string | undefined)[] {
  const board = Array(9).fill(undefined);
  line.forEach(index => {
    board[index] = player; // Marca las casillas de esa combinación
  });
  return board;
}

function printBoard(board: (string | undefined)[]) {
  for (let i = 0; i < 9; i += 3) {
    console.log(
      board.slice(i, i + 3)
        .map(cell => cell ?? ".")
        .join(" | ")
    );
  }
  console.log("---------"); // separador entre tableros
}

const winningSquares: (string | undefined)[] = [ //PUEDO SETEAR LOS VALORES DEL TATETI PARA TESTEAR QUE PASARIA
    "X", "O", "X",
    "O", undefined, "O",
    "X", "O", "O",
];

const inProgressSquares: (string | undefined)[] = [ //PUEDO SETEAR LOS VALORES DEL TATETI PARA TESTEAR QUE PASARIA
    "X", "O", "X",
    "O", undefined, "O",
    "X", "O", undefined,
];

const handlePlayMock = vi.fn(); //Funcion que imita el comportamiento

describe(TaTeTiPage, () => {

    it("cambia el estilo a winner cuando un jugador gana la partida", () => {
        const { getByTestId } = render(<TaTeTiContainer xIsNext={true} squares={winningSquares} onPlay={handlePlayMock} />);
        const className = String(getByTestId("status").className);
        expect(className).toEqual("nextPlayer");
    });

    it("reinicia el juego cuando se le da al boton reiniciar", () => {

        const { getByRole, getByTestId, getAllByTestId } = render(<TaTeTiPage />);

        const restartButton = getByRole("button", { name: "Reiniciar Juego" });
        const button0 = getByTestId("square-0")
        const button1 = getByTestId("square-1")

        // simular clicks para llenar algunas casillas
        fireEvent.click(button0); // pone una X
        fireEvent.click(button1); // pone una O
        fireEvent.click(restartButton)

        const squares = getAllByTestId(/square-/i);
        squares.forEach(square => {
            expect(square.textContent).toBe("");
        });
    });

    it("detecta que todas las combinaciones ganadores funcionen correctamente", () =>{
        winningLines.forEach(line => {
            const board = generateWinningBoard("X", line);
            printBoard(board);
            const { getAllByTestId } = render(<TaTeTiContainer xIsNext={true} squares={board} onPlay={handlePlayMock} />);
            const statuses = getAllByTestId("status"); // devuelve un array
            expect(statuses[0].className).toBe("winner");
        });
    });

    it("se intercambia el mando del jugador 'X' al jugador 'O'", () =>{
        
        const { getByTestId } = render(<TaTeTiContainer xIsNext={true} squares={inProgressSquares} onPlay={handlePlayMock} />);
        
        const button0 = getByTestId("square-0")
        fireEvent.click(button0); // pone una X
        console.log(button0.textContent);
        expect(button0.textContent).toBe("X");


        const button1 = getByTestId("square-1")
        fireEvent.click(button1); // pone una O
        console.log(button1.textContent);
        expect(button1.textContent).toBe("O");
    });
});
