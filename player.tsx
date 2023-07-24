// @flow
import * as React from 'react';
import {values} from './values'
import {useState} from "react";

interface Props {
    name: string,
    identity: keyof typeof values
};
const Player = ({name, identity}: Props) => {
    const [playerName, setPlayerName] = useState(name)
    const [playerIdentity, setPlayerIdentity] = useState(identity)
    function handlePlayerName(event) {

    }

    return (
        <div>
            <div>
                <input placeholder={"enter player 1 name"} onChange={(event)=>{handlePlayerName(event)}} />)
                <input type={"checkbox"} value={"X"}/>
            </div>
            <div>
                <input placeholder={"enter player 2 name"}/>
            </div>
        </div>
    );
};
export default Player;