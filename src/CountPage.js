import React, { useState } from 'react'

function CountPage() {
    const [count, setCount] = useState(0);

    const countUpHandler = () => {
        console.log("Click!")
        // Count Up
        setCount(count + 1)
    }

    return (
        <div>
            <h2>CountPage</h2>
            <p>{count}</p>
            <div>
                <button onClick={countUpHandler}>Count Up</button>
            </div>
            <div>
                <button>Clear</button>
            </div>

        </div>
    )
}

export default CountPage