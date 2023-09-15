import React from 'react'
import "./watch.scss"
import { ArrowBackOutlined } from '@material-ui/icons'

const Watch = () => {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        {/* <video className="video" autoPlay progress controls src="https://www.youtube.com/embed/RQApcf6IAKY?si=Wre32zyYEBDvdWmY"/> */}
        <iframe className="video" src="https://www.youtube.com/embed/RQApcf6IAKY?si=Wre32zyYEBDvdWmY" autoPlay progress controls />
    </div>
  )
}

export default Watch
