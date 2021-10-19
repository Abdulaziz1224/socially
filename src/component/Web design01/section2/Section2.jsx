import React from "react";
import "./SectionVideo.scss";
// import ReactPlayer from "react-player";

function SectionVideo() {
  return (
    <div className="sectionVideo">
      <div className="video-box">
        <div className="text_icon">
          <h3 className="text">Kurs haqida video</h3>
          <img src="/images/Web design01/section-3/Group 130.svg" alt="svg" />
        </div>

        <div className="video_link">
          <iframe
            className="video"
            width="100%"
            src="https://www.youtube.com/embed/cHiRz_A3Ct0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default SectionVideo;
