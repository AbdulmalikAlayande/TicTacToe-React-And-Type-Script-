// @flow
import * as React from 'react';
import {values} from './values'
import {useState} from "react";

type Props = {
    playerName: string,
    identity: keyof typeof values
};
const Player = (props: Props) => {
    const [playerName, setPlayerName] = useState(null)
    return (
        <div>

        </div>
    );
};
export default Player;