import React, {useState} from 'react';
import {UseIncrease} from "./UseIncrease.jsx";
function CounterTwo() {
    const [count, setCount] = UseIncrease(2);
    return(
        <div>
            count: {count};
            <button onClick={increase}>Add 2</button>
        </div>
    );
}

export default CounterTwo;