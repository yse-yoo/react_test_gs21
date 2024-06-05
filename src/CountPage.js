import React, { useState } from 'react'

function CountPage() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <h2>CountPage</h2>
            <p>{count}</p>
        </div>
    )
}

export default CountPage