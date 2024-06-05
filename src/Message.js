import React from 'react'

function Message(props) {
    var user = props.user;
    return (
        <div>
            こんにちは！
            <span>{user.name}</span>
            <p>
                年齢は<span>{user.age}</span>です。
            </p>
        </div>
    )
}

export default Message