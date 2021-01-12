import React, {useState} from 'react'

function CommentDisplay({user, comment}) {
    return (
        <div>
        <h2>{user}</h2>
        <p>{comment}</p>
        </div>
    )
}

export default CommentDisplay