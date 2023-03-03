import React from 'react'
import "./SingleConverstion.css"
import imgCover from "../../images/about2.png"

function SingleCoversation() {
  return (
    <>
    <div className="SingleCoversation">
        <div className="chatImageDiv">
            <img src={imgCover} className="chatImage"  alt="" />
        </div>
        <div className="chatText">
            Ali Hamza
        </div>
    </div>
    </>
  )
}

export default SingleCoversation