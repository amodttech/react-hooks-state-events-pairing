import React, {useState} from 'react'
import CommentDisplay from './CommentDisplay'

function Comments({comments}){

    const commentsDisplayed = comments.map((com) => {
        return <CommentDisplay user={com.user} comment={com.comment}/>
    })

    return (
        <div>
        <h4>{comments.length} Comments</h4>
        <ul>{commentsDisplayed}</ul>
        </div>
    )
}

export default Comments