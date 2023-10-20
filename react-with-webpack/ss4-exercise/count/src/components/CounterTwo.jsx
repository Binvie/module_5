import React, {useState} from 'react';

function CounterTwo() {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count + 2);
    }
    return(
        <div>
            count: {count};
            <button onClick={increase}>Add 2</button>
        </div>
    );
}

export default CounterTwo;