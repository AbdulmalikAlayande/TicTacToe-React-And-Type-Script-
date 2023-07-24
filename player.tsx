// @flow
import * as React from 'react';
import {values} from './values'
import {useState} from "react";
import './player.css'
// @ts-ignore
import "./tictactoeexception.ts";
import TicTacToeException from "./tictactoeexception";

const Player = () => {
    const [player1Name, setPlayer1Name] = useState("")
    const [player1Identity, setPlayer1Identity] = useState<keyof typeof values>(values.EMPTY)
    const [xIsChosen, setXIsChosen] = useState(false)
    const [oIsChosen, setOIsChosen] = useState(false)
    const [player2Name, setPlayer2Name] = useState("")
    const [player2Identity, setPlayer2Identity] = useState<keyof typeof values>(values.EMPTY)
    function handlePlayer1Name(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        setPlayer1Name(event.target.value.toString)
    }

    function playerHasNoIdentity(playerId) {
        return playerId === values.EMPTY
    }

    function checkIfPlayerIdentityHasBeenChosen(identity) {
        if (identity === values.X && xIsChosen){
            let message = "Please Choose The Second Character The Character "+identity+" Has Been Chosen";
            let cause = "Player tried to choose identity "+identity+" But it has been chosen by the second player";
            const exception = new TicTacToeException(message)
            exception.setCause(cause)
            exception.setErrorIdentifier("handleChangeForPlayerIdentity", "28, 29, 40, 41, 42, 43")
            throw exception;
        }
        else if (identity === values.O && oIsChosen){

        }
    }

    function handleChangeForPlayer1Identity(event) {
        event.preventDefault()
        if (playerHasNoIdentity(player1Identity) === true) {
            setPlayer1Identity(event.target.textContent)
            event.target.textContent === values.X ? setXIsChosen(true) : setOIsChosen(true)
        }
        checkIfPlayerIdentityHasBeenChosen(event.target.textContent)
    }

    function handlePlayer2Name(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        setPlayer2Name(event.target.value.toString)
    }

    function handleChangeForPlayer2Identity(event: React.MouseEvent<HTMLButtonElement>) {
    }

    return (
        <div className={"player_section_background"}>
            <div className={"player_section"}>
                <section id={"name_section"}>
                    <input
                        placeholder={"enter player name"}
                        onChange={(event)=>{handlePlayer1Name(event)}}/>
                </section>
                <section id={"identity_button_section"}>
                    <button
                        placeholder={"please pick your identity"} value={"X"}
                        onClick={(event)=>{handleChangeForPlayer1Identity(event)}}
                    >X</button>
                    <button
                        placeholder={"please pick your identity"} value={"Y"}
                        onClick={(event)=>{handleChangeForPlayer1Identity(event)}}
                    >Y</button>
                </section>
            </div>
            <div className={"player_section"}>
                <section id={"name_section_1"}>
                    <input
                        placeholder={"enter player name"}
                        onChange={(event)=>{handlePlayer2Name(event)}}/>
                </section>
                <section id={"identity_button_section_1"}>
                    <button
                        placeholder={"please pick your identity"} value={"X"}
                        onClick={(event)=>{handleChangeForPlayer2Identity(event)}}
                    >X</button>
                    <button
                        placeholder={"please pick your identity"} value={"Y"}
                        onClick={(event)=>{handleChangeForPlayer2Identity(event)}}
                    >Y</button>
                </section>
            </div>
        </div>
    );
};
export default Player;
