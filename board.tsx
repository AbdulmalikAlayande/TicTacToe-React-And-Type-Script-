// @flow
import * as React from 'react';
import {useState} from "react";
// @ts-ignore
import {values} from "./values.tsx";
 function Board(){

    const [board, setBoard] = useState<Array<Array<typeof values>>>();
    
    return (
        <div>
            <div>
                <input id='0' type='text' value={0}/>
                <input id={'1'} type={'text'}/>
                <input id={'2'} type={'text'}/>
            </div>
            <div>
                <input  id={'3'} type={'text'}/>
                <input id={'4'} type={'text'}/>
                <input id={'5'} type={'text'}/>
            </div>
            <div>
                <input id={'6'} type={'text'}/>
                <input id={'7'} type={'text'}/>
                <input id={'8'} type={'text'}/>
            </div>
        </div>
    );
};
 export default Board;