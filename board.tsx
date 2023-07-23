import * as React from 'react';
import {useState} from "react";
// @ts-ignore
import {values} from "./values.tsx";
export const Board = () => {
    const initialBoard: values[][] = [
        [values.EMPTY, values.EMPTY, values.EMPTY],
        [values.EMPTY, values.EMPTY, values.EMPTY],
        [values.EMPTY, values.EMPTY, values.EMPTY]
    ]
    const [board, setBoard] = useState(initialBoard);

    const updateBoard = (event, index) =>{
        event.preventDefault()
        let ticValue = event.target.value.toUpperCase();
        switch (index.toString()) {
            case "1": board[0][0] = ticValue
                break;
            case "2": board[0][1] = ticValue
                break;
            case "3": board[0][2] = ticValue
                break;
            case "4": board[1][0] = ticValue
                break;
            case "5": board[1][1] = ticValue
                break;
            case "6": board[1][2] = ticValue
                break;
            case "7": board[2][0] = ticValue
                break
            case "8": board[2][1] = ticValue
                break
            case "9": board[2][2] = ticValue
        }
        console.log(board.toString())
    }
    
    return (
        <div>
            <div id={"upper_row"}>
                <input id={'1'} type={'text'} onChange={(event)=>updateBoard(event, 1)}/>
                <input id={'2'} type={'text'} onChange={(event)=>updateBoard(event, 2)}/>
                <input id={'3'} type={'text'} onChange={(event)=>updateBoard(event, 3)}/>
            </div>
            <div id={"middle_row"}>
                <input id={'4'} type={'text'} onChange={(event)=>updateBoard(event, 4)}/>
                <input id={'5'} type={'text'} onChange={(event)=>updateBoard(event, 5)}/>
                <input id={'3'} type={'text'} onChange={(event)=>updateBoard(event, 6)}/>
            </div>
            <div id={"lower_row"}>
                <input id={'6'} type={'text'} onChange={(event)=>updateBoard(event, 7)}/>
                <input id={'7'} type={'text'} onChange={(event)=>updateBoard(event, 8)}/>
                <input id={'8'} type={'text'} onChange={(event)=>updateBoard(event, 9)}/>
            </div>
        </div>
    );
};
export default Board