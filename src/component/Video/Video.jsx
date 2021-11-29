import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Modul from "./Modul/Modul";
import PageLeft from "./PageLeft/PageLeft";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import Footer from "../Web design01/Footer/Footer";
import "./video.scss";

export const VideoContext = React.createContext()

function Video() {
  const [videoLink, setVideoLink] = useState("")
  const [modul, setModul] = useState(1);
  const [currentVideo, setCurrentVideo] = useState("")

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <VideoContext.Provider value={{setVideoLink, videoLink,modul,setModul,currentVideo,setCurrentVideo}}>
      <div className="videoCourse">
        <Navbar />
        <div className="base-container">
          <PageLeft />
          <div className="pageRight">
            <VideoPlayer />
            <Modul />
            <PageLeft />
          </div>
        </div>
        <Footer />
      </div>
    </VideoContext.Provider>
  );
}

export default Video;
