import { useState } from "react" // named export
import React from 'react' // default export

const StateHandling = () => {
    const [count, setcount] = useState(20);

    function increment() {
        /* alert("Increasing The Value") */
        setcount(count + 10);
    }

    return (
        <div>
            StateHandling
            <h2>CounterValue = {count}</h2>
            <button onClick={increment}>Increment Value</button>
            <br />
            <button onClick={() => setcount(count - 10)}>Decrement Value</button>
            <br />
            <button onClick={() => setcount(count - 10)} value={count}>{count}</button>
        </div>
    )
}

export default StateHandling
