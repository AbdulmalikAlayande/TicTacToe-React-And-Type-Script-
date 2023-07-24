import * as React from 'react';
// @ts-ignore
import Board from "./board.tsx";
// @ts-ignore
import Player from "./player.tsx";
import './tictactoe.css'
import {useState} from "react";

export const Tictactoe = () => {
    const [playerHasEnteredGame, setPayerHasEnteredGame] = useState(false)
    const [buttonStartGameIsClicked, setButtonStartGameIsClicked] = useState(false)

    function collectPlayersNameAndIdentity() {
        setPayerHasEnteredGame(true)
        console.log(playerHasEnteredGame)
        console.log("hi")
    }



    return (
        <>
            {playerHasEnteredGame ? (<div className={"player_section_background"}>
                    <div>
                        <Player/>
                    </div>
                    <div id={"start_game_button"}>
                        <button onClick={()=>{setButtonStartGameIsClicked(true)}}>Start Game</button>
                    </div>
                </div>) : buttonStartGameIsClicked ?  (<div>
                        <Board/>
                    </div>
                    ) : (
                    <div className={"welcome_section"}>
                    <p id={"welcome"}>Welcome</p>
                    <button onClick={()=>collectPlayersNameAndIdentity()}>Play game</button>
                </div>)
            }
        </>
    );
};
export default Tictactoe;
