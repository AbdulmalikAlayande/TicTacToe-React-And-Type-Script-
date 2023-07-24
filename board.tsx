import * as React from 'react';
import {useState} from "react";
import './tictactoe.css'
// @ts-ignore
import {values} from "./values.tsx";
//@ts-ignore
import Player from "./player.tsx";
export const Board = () => {
    const [error, setError] = useState(false)
    const initialBoard: values[][] = [
        [values.EMPTY, values.EMPTY, values.EMPTY],
        [values.EMPTY, values.EMPTY, values.EMPTY],
        [values.EMPTY, values.EMPTY, values.EMPTY]
    ]
    const [board, setBoard] = useState(initialBoard);

    function assignValueToBoard(index, ticValue: string) {
        switch (index.toString()) {
            case "1":board[0][0] = ticValue
                break;
            case "2":board[0][1] = ticValue
                break;
            case "3":board[0][2] = ticValue
                break;
            case "4":board[1][0] = ticValue
                break;
            case "5":board[1][1] = ticValue
                break;
            case "6":board[1][2] = ticValue
                break;
            case "7":board[2][0] = ticValue
                break
            case "8":board[2][1] = ticValue
                break
            case "9":board[2][2] = ticValue
        }
    }

    function throwException() {
        throw new RangeError("Please Input in an unfilled space")
    }

    function theCellPlayedInIsEmpty(index) {
        switch (index){
            case 1: index = board[0][0]
                break
            case 2: index = board[0][1]
                break
            case 3: index = board[0][2]
                break
            case 4: index = board[1][0]
                break
            case 5: index = board[1][1]
                break
            case 6: index = board[1][2]
                break
            case 7: index = board[2][0]
                break
            case 8: index = board[2][1]
                break
            case 9: index = board[2][2]
                break
        }
        return index === values.EMPTY;
    }

    function renderErrorMessage() {
        return (
            <div className={"error_message"} style={{ display: error ? "block" : "none" }}>
                <p>
                    Hey {Player}, That is an Invalid Move: You can't place there again
                    because it's already filled
                </p>
        </div>)
    }

    const updateBoard = (event, index) =>{
        try {
            event.preventDefault()
            let ticValue = event.target.value.toUpperCase();
            theCellPlayedInIsEmpty(index) === true ? assignValueToBoard(index, ticValue) : throwException();
            console.log(board.toString())
        }catch (exception) {
           setError(true)
        }
    }

    // @ts-ignore
    return (
        <div className={"board_background"}>
            <div className={"board"}>
                <div id={"board_upper_row"}>
                    <input id={'1'} type={'text'} onChange={(event)=>updateBoard(event, 1)}/>
                    <input id={'2'} type={'text'} onChange={(event)=>updateBoard(event, 2)}/>
                    <input id={'3'} type={'text'} onChange={(event)=>updateBoard(event, 3)}/>
                </div>
                <div id={"board_middle_row"}>
                    <input id={'4'} type={'text'} onChange={(event)=>updateBoard(event, 4)}/>
                    <input id={'5'} type={'text'} onChange={(event)=>updateBoard(event, 5)}/>
                    <input id={'3'} type={'text'} onChange={(event)=>updateBoard(event, 6)}/>
                </div>
                <div id={"board_lower_row"}>
                    <input id={'6'} type={'text'} onChange={(event)=>updateBoard(event, 7)}/>
                    <input id={'7'} type={'text'} onChange={(event)=>updateBoard(event, 8)}/>
                    <input id={'8'} type={'text'} onChange={(event)=>updateBoard(event, 9)}/>
                </div>
            </div>
            {renderErrorMessage()}
        </div>
    );
};
export default Board