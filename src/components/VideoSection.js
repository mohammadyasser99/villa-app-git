import React from "react"
import video from "../images/video-frame.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const VideoSection = () => {
    return (
        <React.Fragment>
        <div class="video section">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 offset-lg-4">
              <div class="section-heading text-center">
                <h6>| Video View</h6>
                <h2>Get Closer View & Different Feeling</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div class="video-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="video-frame">
                <img src={video} alt="" />
                <a href="https://youtube.com" target="_blank"><FontAwesomeIcon icon={faPlay} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
        </React.Fragment>
    )
}

export default VideoSection