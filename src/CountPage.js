import React, { useState } from 'react'

function CountPage() {
    const [count, setCount] = useState(0);
    //var count = 0;

    const countUpHandler = () => {
        console.log("Click!")
        // Count Up
        setCount(count + 1)
    }

    const clearHandler = () => {
        // Clear Count
        setCount(0);
        // count = 0;
    }

    return (
        <div>
            <h2>CountPage</h2>
            <p>{count}</p>
            <div>
                <button onClick={countUpHandler}>Count Up</button>
            </div>
            <div>
                <button onClick={clearHandler}>Clear</button>
            </div>
        </div>
    )
}

export default CountPage