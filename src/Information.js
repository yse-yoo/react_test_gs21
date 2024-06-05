import React, { useState } from 'react'

function Information() {
    const [isShow, setIsShow] = useState(false);

    var informations = [
        { id: 1, updated_at: "2024/06/05", title: "DMMビットコイン流出" },
        { id: 2, updated_at: "2024/06/04", title: "乳酸菌飲料ブーム" },
        { id: 3, updated_at: "2024/06/03", title: "「空飛ぶ基地局」26年に商用化" },
    ];
    const showHandler = () => {
        setIsShow(!isShow)
    }

    return (
        <div>
            <button onClick={showHandler}>{isShow ? "Hide" : "Show"}</button>
            {isShow &&
                <ul>
                    {
                    informations.map((info) => (
                        <li key={info.id}>
                            {info.title}
                            ({info.updated_at})
                        </li>
                    )
                    )}
                </ul>
            }
        </div>
    )
}

export default Information