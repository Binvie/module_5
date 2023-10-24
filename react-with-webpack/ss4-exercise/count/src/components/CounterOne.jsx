import React, {useState} from 'react';
import {UseIncrease} from "./UseIncrease.jsx";

export function CountOne() {
    const [count, setCount] = UseIncrease(1)

    return (
        <div>
            Count: {count}
            <div>
                <button onClick={setCount}>Add 1</button>
            </div>
        </div>
    )
}

export default CounterOne;