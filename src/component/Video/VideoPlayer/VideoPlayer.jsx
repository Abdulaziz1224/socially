import React from 'react'
import ReactPlayer from 'react-player'

function VideoPlayer() {
  return (
    <div className="videoPlayer">
      <div className="video-box">
        <div className="video_link">
          {/* <ReactPlayer url="https://youtu.be/cHiRz_A3Ct0" width="100%" height="536px"/> */}
          <img src="/images/videoCourse/videoPc.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
