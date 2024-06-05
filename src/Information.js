import React, { useState } from 'react'

function Information() {
    const [isShow, setIsShow] = useState(false);

    return (
        <div>
            {isShow &&
            <ul>
                <li>Information1</li>
                <li>Information2</li>
                <li>Information3</li>
            </ul>
            }
        </div>
    )
}

export default Information