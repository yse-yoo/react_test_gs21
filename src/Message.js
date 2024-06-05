import React from 'react'

function Message(props) {
    var user = props.user;
    return (
        <div>
            こんにちは！
            <span>{user.name}</span>
        </div>
    )
}

export default Message