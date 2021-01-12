import React, {useState} from "react"
import video from "../data/video.js";
import VideoDetails from './VideoDetails'
import Comments from './Comments'

function App() {
  console.log("Here's your data:", video);

  

  return (
    <div className="App">

      
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title={video.title}
      />
      <VideoDetails views={video.views} upvotes={video.upvotes} downvotes={video.downvotes} createdAt={video.createdAt} title={video.title}/>
      <hr></hr>

      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
