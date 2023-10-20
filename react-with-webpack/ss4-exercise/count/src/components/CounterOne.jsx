import React, {useState} from 'react';

function CounterOne() {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count + 1);
    }
    return(
        <div>
            count: {count};
            <button onClick={increase}>Add 1</button>
        </div>
    );
}

export default CounterOne;