import React, { useEffect, useState } from "react";
import { useContext } from "react/cjs/react.development";
import { VideoContext } from "../Video";

function VideoPlayer() {

  const {currentVideo} = useContext(VideoContext)

  const [iframe, setIframe] = useState(<iframe></iframe>)

  useEffect(() => {
    setIframe(
      <iframe
        title="video"
        data-v-6bef544c=""
        data-playerid="MTExOTQ3MA=="
        allowtransparency="true"
        name="vooplayerframe"
        allowfullscreen="allowfullscreen"
        watch-type=""
        url-params=""
        frameborder="0"
        scrolling="no"
        src={`https://46585.cdn.spotlightr.com/publish/${currentVideo}`}
        className="video-player-container vooplayer"
        style={{
          width: "auto",
          height: "426.394px",
          minWidth: "100%",
          opacity: 1,
          background: "none",
        }}
      ></iframe>
    );
    console.log(currentVideo) 
  }, [currentVideo])

  return (
    <div className="videoPlayer">
      <div className="video-box">
        <div className="video_link">
          {iframe}  
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
