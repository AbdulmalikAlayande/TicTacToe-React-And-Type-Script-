// @flow
import * as React from 'react';
import {values} from './values'
import {useState} from "react";
import './player.css'

interface Props {
    name: string,
    identity: keyof typeof values
}
const Player = ({name, identity}: Props) => {
    const [playerName, setPlayerName] = useState(name)
    const [playerIdentity, setPlayerIdentity] = useState(identity)
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
                        value={playerName} placeholder={"enter player 1 name"}
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