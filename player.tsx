// @flow
import * as React from 'react';
import {values} from './values'
import {useState} from "react";
import './player.css'

const Player = () => {
    const [playerName, setPlayerName] = useState("")
    const [playerIdentity, setPlayerIdentity] = useState<keyof typeof values>()
    function handlePlayerName(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        setPlayerName(event.target.value)
    }

    function handleChangeForPlayerIdentity(event) {
        event.preventDefault()
        setPlayerIdentity(event.target.textContent)
    }

    return (
        <div className={"player_section_background"}>
            <div className={"player_section"}>
                <section id={"name_section"}>
                    <input
                        placeholder={"enter player name"}
                        onChange={(event)=>{handlePlayerName(event)}}/>
                </section>
                <section id={"identity_button_section"}>
                    <button
                        placeholder={"please pick your identity"} value={"X"}
                        onClick={(event)=>{handleChangeForPlayerIdentity(event)}}
                    >X</button>
                    <button
                        placeholder={"please pick your identity"} value={"Y"}
                        onClick={(event)=>{handleChangeForPlayerIdentity(event)}}
                    >Y</button>
                </section>
            </div>
        </div>
    );
};
export default Player;
