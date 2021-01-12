import React, {useState} from 'react'


function VideoDetails({views, upvotes, downvotes, createdAt, title}){

    const [thumbUp, setThumbUp] = useState(upvotes)
    const [thumbDown, setThumbDown] = useState(downvotes)

    function handleThumbUp() {
        setThumbUp((likes) => likes + 1)
    }
    
    function handleThumbDown() {
        setThumbDown((dislikes) => dislikes + 1)
    }
    
    return (
    <div>
        <h1>{title}</h1>
        <p>{views} Views | Uploaded {createdAt}</p>
        <button onClick={handleThumbUp}>{thumbUp}👍</button>
        <button onClick={handleThumbDown}>{thumbDown}👎</button>
    </div>
    )
}

export default VideoDetails