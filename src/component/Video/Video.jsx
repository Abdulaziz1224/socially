import React from 'react'
import Navbar from "../Navbar/Navbar"
import Modul from './Modul/Modul'
import PageLeft from "./PageLeft/PageLeft"
import VideoPlayer from './VideoPlayer/VideoPlayer'
import Footer from "../Web design01/Footer/Footer"
import "./video.scss"

import {useState} from "react"



function Video() {

  return (
    <div className="videoCourse">
      <Navbar/>
      <div className="base-container">
        {}
        <PageLeft/>
        <div className="pageRight">
          <VideoPlayer/>
          <Modul/>
          <PageLeft/>
        </div>
        {}
      </div>
      <Footer />
    </div>
  )
}

export default Video
