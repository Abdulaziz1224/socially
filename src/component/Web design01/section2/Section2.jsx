import React from "react";
import "./SectionVideo.scss";
import ReactPlayer from "react-player";

function SectionVideo() {
  return (
    <div className="sectionVideo">
      <div className="video-box">
        <div className="text_icon">
          <h3 className="text">Kurs haqida video</h3>
          <img src="/images/Web design01/section-3/Group 130.svg" alt="svg" />
        </div>

        <div className="video_link">
          <ReactPlayer
            url="https://youtu.be/cHiRz_A3Ct0"
            width="100%"
            height="536px"
          />
        </div>
      </div>
    </div>
  );
}

export default SectionVideo;
