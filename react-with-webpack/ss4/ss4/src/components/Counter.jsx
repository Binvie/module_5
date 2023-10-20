import React, {useState} from 'react';

function Counter(props) {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
      <div>
          <h2>Số lần : {count}</h2>
          <div>
              <button onClick={handleClick}>Click</button>
          </div>
      </div>
    );
}

export default Counter;