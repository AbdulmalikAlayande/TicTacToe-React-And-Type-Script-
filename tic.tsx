import * as React from 'react';
import {useState} from "react";
/*use alert in the tictactoe
like to alert them about something
the alert is from bootstrap*/
type CellValue = 'X' | 'O' | '';

type Props = {
    board: Array<Array<CellValue>>;
};

const Tictactoe: React.FC<Props> = ({ board }) => {
    const [gameBoard, setGameBoard] = useState<Array<Array<CellValue>>>(board);

    const handleCellClick = (rowIndex: number, columnIndex: number) => {
        console.log(board)
        if (gameBoard[rowIndex][columnIndex] !== '') {
            return; // Cell already has a value, do nothing
        }

        const newBoard = [...gameBoard];
        newBoard[rowIndex][columnIndex] = 'X'; // Example: Set the value to 'X'

        setGameBoard(newBoard);
    };

    return (
        <div>
            {gameBoard.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((cell, columnIndex) => (
                        <button
                            key={columnIndex}
                            onClick={() => handleCellClick(rowIndex, columnIndex)}
                        >
                            {cell}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Tictactoe;
